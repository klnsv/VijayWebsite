import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import './globals.css'

export const meta = {
  title: 'Your Name | Software Developer',
  description: 'Modern portfolio built with Next.js',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
        </body>
      </html>
  )
}

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {children}
//       </body>
//     </html>
//   );
// }
