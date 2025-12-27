'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

// import { headers as getHeaders } from 'next/headers.js'
// import Image from 'next/image'
// import { getPayload } from 'payload'
// import { fileURLToPath } from 'url'
// import config from '@/payload.config'
import './styles.css'
import Navbar from './components/Navbar'

export default function HomePage() {
  const router = useRouter()

  return (
    <div className="home">
      <div id="section-nav" className="section">
        <Navbar></Navbar>
      </div>
      <div id="section-hero" className="section">
        
      </div>
    <div id="section-feature" className="section">

    </div>
    <div id="section-projects" className="section">

    </div>
    <div id="section-hobbies" className="section">

    </div>
    </div>
  )
}
