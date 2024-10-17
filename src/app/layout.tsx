import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Landing',
  description: 'Datriever landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/logo.png' />
      </head>
      <body>{children}</body>
    </html>
  )
}
