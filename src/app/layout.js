import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const poppins = Space_Grotesk({ subsets: ['latin'],weight:'700' })


export const metadata = {
  title: 'Wings To Grow',
  description: 'Wings To :digital marketing agency',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
