import React from 'react'
import Image from "next/image";


const page = () => {
  return (
    <>
      <Image 
        src={"/login.svg"} alt="login-img" height={300} width={300} />
    </>
  )
}

export default page