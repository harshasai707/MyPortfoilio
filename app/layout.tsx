import "./globals.css"
import { Inter, Roboto } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-roboto" })

export const metadata = {
  title: "Amaravarapu Harsha Sai - Game & UI/UX Designer",
  description: "Portfolio of Amaravarapu Harsha Sai, a Game Designer and UI/UX Designer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${roboto.variable} font-sans bg-gray-900 text-gray-100`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

