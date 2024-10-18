import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://betry-psychomotricienne.fr'),
  icons: {
    icon: "/images/logopsy_1.png",
  },
  description: "Estelle Bétry - Psychomotricienne sur Mouriès, Arles, Saint-Martin de Crau et les Alpilles - Spécialisée dans le TDA/H",
  openGraph: {
    title: "Estelle Bétry - Psychomotricienne",
    description: "Estelle Bétry - Psychomotricienne sur Mouriès, Arles, Saint-Martin de Crau et les Alpilles",
    images: ["https://zupimages.net/up/24/10/hdau.jpg"],
    type: "website",
    locale: "fr"
  },
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  )
}
