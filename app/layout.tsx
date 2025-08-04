import './globals.css'
import { Karla } from 'next/font/google'
import Navbar from './components/Navbar'

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-karla',
})

export const metadata = {
  title: 'Indresh',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={karla.variable}>
      <body className="font-sans bg-white text-black min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  )
}
