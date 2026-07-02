"use client"
import { usePlayground } from '@/modules/playground/hooks/usePlayground';
import { useParams } from 'next/navigation'
import React from 'react'

const MainPlayGroundPage = () => {
  const {id} = useParams<{id:string}>();

  const {
    playgroundData,
    templateData,
    isLoading,
    error,
    loadPlayground,
    saveTemplateData
  } = usePlayground(id);
  
  console.log("playground data",playgroundData)
  console.log("template data",templateData)
  return (
    <div>
      parems: {id}
    </div>
  )
}

export default MainPlayGroundPage