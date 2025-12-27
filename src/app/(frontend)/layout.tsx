import React from 'react'
import './global.css'
// import { cn } from '@/lib/utils'
import './styles.css'
import Navbar from './components/Navbar'
export const metadata = {
  description: 'A blank template using Payload in a Next.js app.',
  title: 'Payload Blank Template',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" suppressHydrationWarning>
      <body >
        <main><Navbar />
          {children}</main>
      </body>
    </html>
  )
}
