import type { Metadata } from "next"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Title from "../components/Title/Title"
import "./globals.css"
import styles from "./styles.module.css"

import { Josefin_Sans } from "next/font/google"

const josefin = Josefin_Sans({
  subsets: ["latin"],
  variable: "--font-josefin",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Victor Araújo - Front end Developer",
  authors: [{ name: "Victor Araújo", url: "http://victoraraujo.com.br" }],
  description: "Victor Araújo is a dev who loves front-end",
  keywords: [
    "dev",
    "developer",
    "frontend",
    "vue",
    "vuejs",
    "react",
    "reactjs",
    "next",
    "nextjs",
    "front-end",
  ],
  openGraph: {
    title: "Victor Araújo - Front end Developer",
    description: "Victor Araújo is a dev who loves front-end",
    url: "http://victoraraujo.com.br",
    siteName: "Victor Araújo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Victor Araújo - Front end Developer",
    description: "Victor Araújo is a dev who loves front-end",
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
        <div className={styles.header}>
          <Header />
          <div className={styles.body}>
            <Title />
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
