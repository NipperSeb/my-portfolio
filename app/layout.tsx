
import React from 'react'
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { aboutMeData, pages } from "./data/data"
import "../styles/globals.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <Header name={aboutMeData.name} pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
