"use client"

import { Zoom } from "react-awesome-reveal"
import { Heading } from "@radix-ui/themes"
import { useRouter } from 'next/navigation';

export default function () {

  const router = useRouter();

  return (
    <Zoom>
      <div className='flex justify-center items-center h-screen'>
        <Heading
          size='9'
          className='text-5xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent'
          onClick={() => router.push("/GetStarted")}
        >
          ¡Hola! Comencemos...
        </Heading>
      </div>
    </Zoom>
  )
}