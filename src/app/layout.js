import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LT IT Solutions',
  description: 'LT IT Solutions is an IT and AV solutions company with experience in the professional field. With the goal of delivering high quality solutions to its clients, LT IT is the one stop shop for all industrial needs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
