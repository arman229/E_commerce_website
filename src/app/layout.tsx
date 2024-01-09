import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
    title: 'A ZenithMarket ',
    description: 'Discover a world of quality products at ZenithMarket, your go-to ecommerce platform for an unparalleled shopping experience.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
      <div className={'flex flex-col min-h-screen p-[1rem'}  style={{maxWidth:"1550px",margin:'auto'}}>
          <Navbar/>
          <div className={'flex-grow my-8 lg:px-8 md:px-4 px-4'}>{children}</div>
          <Footer/>
      </div>
      </body>
    </html>
  )
}
