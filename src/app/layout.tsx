import type { Metadata } from "next"
import Footer from "../components/Footer/Footer"
import "./globals.css"
import styles from "./styles.module.css"

import { Josefin_Sans } from "next/font/google"
import Sidebar from "@/components/Sidebar/Sidebar"
import MotionProvider from "@/components/MotionProvider"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.victoraraujo.com.br"),
  title: "Victor Araújo - Senior Software Engineer",
  authors: [{ name: "Victor Araújo", url: "https://www.victoraraujo.com.br" }],
  description: "Senior Software Engineer with 10+ years building interfaces that inspire.",
  keywords: [
    "dev",
    "developer",
    "software engineer",
    "full stack",
    "frontend",
    "senior",
    "vue",
    "vuejs",
    "react",
    "reactjs",
    "next",
    "nextjs",
    "front-end",
    "typescript",
  ],
  openGraph: {
    title: "Victor Araújo - Senior Software Engineer",
    description: "Senior Software Engineer with 10+ years building interfaces that inspire.",
    url: "https://www.victoraraujo.com.br",
    siteName: "Victor Araújo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Araújo - Senior Software Engineer",
    description: "Senior Software Engineer with 10+ years building interfaces that inspire.",
  },
  icons: {
    icon: "logo.svg",
    shortcut: "logo.svg",
    apple: "logo.svg",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <head>
        <meta name="robots" content="index, follow"></meta>
      </head>
      <body className={josefin.className}>
        <MotionProvider>
          <div className={styles.header}>
            <Sidebar />
            <div className={styles.body}>{children}</div>
            <Footer />
          </div>
        </MotionProvider>
      </body>
    </html>
  )
}
