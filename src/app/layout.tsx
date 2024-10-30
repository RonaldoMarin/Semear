import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./styles.css"
import Navbar from "@/components/NavBar"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Semear | Home",
  description: "Página home do semear",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
