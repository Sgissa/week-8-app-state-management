import { Inter } from 'next/font/google'
import './globals.css'
import Nav from "@/components/Nav/index"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Week 8',
  description: 'App State Management',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav></Nav>
        {children}
        </body>
    </html>
  )
}
