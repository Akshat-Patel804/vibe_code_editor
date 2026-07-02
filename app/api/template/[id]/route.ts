import {
  readTemplateStructureFromJson,
  saveTemplateStructureToJson,
} from "@/modules/playground/lib/path-to-json";
import { db } from "@/lib/db";
import { templatePaths } from "@/lib/template";
import path from "path";
import fs from "fs/promises";
import { NextRequest } from "next/server";
import { error } from "console";

// validation of json structure
function validateJsonStructure(data: unknown): boolean {
  try {
    JSON.parse(JSON.stringify(data)); // Ensures it's serializable
    return true;
  } catch (error) {
    console.error("Invalid JSON structure:", error);
    return false;
  }
}


export async function GET(request:NextRequest,{params}:{params:Promise<{id:string}>}) {
    const {id} = await params;

    if(!id){
        return Response.json({error: " missing playground id"},{status:404})
    }

    const playground = await db.playground.findUnique({
        where:{id}
    })

    if(!playground){
        return Response.json({error: "playground not found"},{status:404});
    }


    const templateKey = playground.template as keyof typeof templatePaths;
    const templatePath = templatePaths[templateKey];


    if(!templatePath){
        return Response.json({error: "Template path is not found "},{status:404});
    }

    try {
        const inputPath = path.join(process.cwd(),templatePath);
        const outputFile = path.join(process.cwd(),`output/${templateKey}.josn`)
  
        await saveTemplateStructureToJson(inputPath, outputFile)
        const result = await readTemplateStructureFromJson(outputFile)
        

        // sending result to the validateJsonStructure 
        
        if(!validateJsonStructure(result.items)){
            return Response.json({error:"invalidate JSON structure"},{status:500})
        }

        await fs.unlink(outputFile)
        return Response.json({ success: true, templateJson: result }, { status: 200 })
 
    } catch (error) {
        
    }
}