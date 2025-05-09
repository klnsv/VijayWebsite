// app/about/page.tsx
import { Inter } from 'next/font/google'
import Bubbles from "../components/bubbles";
const inter = Inter({ subsets: ['latin'] })
export default function AboutPage() {
    return (
      <div className={inter.className}>
        <Bubbles/>
        <section className="flex flex-col items-start mt-10 h-screen text-left px-8">
            <h1 className="text-2xl font-bold">About Us</h1>
            <p>This is the About page.</p>
        </section>
      </div>
    );
  }
  