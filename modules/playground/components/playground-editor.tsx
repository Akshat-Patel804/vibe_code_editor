"use client"
import React from 'react'
import { useRef,useEffect,useCallback } from 'react'
import Editor, { Monaco, useMonaco } from '@monaco-editor/react';
import { TemplateFile } from "../lib/path-to-json"
import { configureMonaco, defaultEditorOptions, getEditorLanguage } from "../lib/editor-config"
import { editor } from 'monaco-editor';
import { updateOptions } from 'recharts/types/state/rootPropsSlice';

interface PlaygroundEditorProps{
    activeFile:TemplateFile | undefined;
    content: string;
    onContentChange:(value:string) => void
}


const PlaygroundEditor = ({
    activeFile,
    content,
    onContentChange
}:PlaygroundEditorProps) => {
    const editorRef = useRef<any>(null)
    const monacoRef = useRef<Monaco | null>(null)
    const handleEdiroDidMount = (editor:any ,monaco:Monaco)=>{
        editorRef.current = editor
        monacoRef.current = monaco
        console.log("Editor instance method",!!editorRef.current)

        editor.updateOptions({
            ...defaultEditorOptions,

        })

        configureMonaco(monaco)

        updateEditorLanguage()
    }

    const updateEditorLanguage = () => {
        if (!activeFile || !monacoRef.current || !editorRef.current) return
        const model = editorRef.current.getModel()
        if (!model) return

        const language = getEditorLanguage(activeFile.fileExtension || "")
        try {
        monacoRef.current.editor.setModelLanguage(model, language)
        } catch (error) {
        console.warn("Failed to set editor language:", error)
        }

    }

    useEffect(()=>{
        updateEditorLanguage()
    },[activeFile])
    return (
    <div className='h-full relative'>
        <Editor 
            height={"100%"}
            value={content}
            onChange={(value)=>onContentChange(value || "")}
            onMount={handleEdiroDidMount}
            language={activeFile ? getEditorLanguage(activeFile.fileExtension || ""): "plaintext"}
            // @ts-ignore
            options={defaultEditorOptions}
        
        />
    </div>
  )
}

export default PlaygroundEditor