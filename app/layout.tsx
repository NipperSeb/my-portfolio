
import React from 'react'

import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { pages } from "./data/data"
import "../styles/globals.css"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Sébastien Pincepoche : recherche une alternance chargé de référencement SEO</title>
        <meta name="description" content="Ce porfolio met en avant mes différents projets réalisés en tant que programmeur et des conseils concernant le traffic management"></meta>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body>
        <Header pages={pages} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
