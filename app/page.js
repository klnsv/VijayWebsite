import Image from "next/image";
import { Mail, Github } from 'lucide-react';
import { Inter } from 'next/font/google'
import Bubbles from "./components/bubbles.js";
const inter = Inter({ subsets: ['latin'] })

import FloatingNavbar from "./components/floatingNavbar.js";

export default function Home() {
  return (
    <div className={inter.className}>
      <Bubbles />
      <div className="mt-8">
        <FloatingNavbar />
      </div>
      <section className="flex flex-col items-start mt-20 md:mt-32 h-screen text-left px-8">
        <h1 className="text-xl md:text-6xl font-bold mb-4">Hi, I\'m Vijay Karthick</h1>
        <p className="text-m md:text-xl text-gray-600 max-w-xl md:my-4">
          I\'m a sophomore who loves problems and learning things constantly. I am a Mathphile and I love Linear Algebra, solving probability puzzles.
        </p>
        <p className="text-m md:text-xl text-gray-600 max-w-xl my-2 md:my-4">
          Currently I am attempting to Market make in illiquid cryptocurrencies, contributing to open source and learning ML.
        </p>
        <p className="text-m md:text-xl text-gray-600 max-w-xl my-2 md:my-4">
          I am a generalist and I love learning new things and solving problems. I love challenges and solving them.
        </p>
        <p className="text-m md:text-xl text-gray-600 max-w-xl my-2 md:my-4">
          Languages: C/C++, Go, Python, JavaScript, Solidity
        </p>
        <p className="text-m md:text-xl text-gray-600 max-w-xl my-2 md:my-4">
          Frameworks: React, Next.js, Express.js, NestJS, FastAPI
        </p>
        <div className="flex flex-col md:flex-row gap-4">
        <a
  className="mt-4 px-6 py-3 bg-[rgba(255,255,255,0.2)] text-white rounded-2xl hover:bg-[rgba(255,255,255,0.3)] transition backdrop-blur-md shadow-lg flex items-center gap-2 w-fit"
  href="mailto:be23b040@smail.iit.ac.in"
>
  <Mail size={20} />
  Mail Me!
</a>

<a
  href="https://github.com/klnsv"
  className="mt-4 px-6 py-3 bg-[rgba(0,0,255,0.2)] text-white rounded-2xl hover:bg-[rgba(0,0,255,0.3)] transition backdrop-blur-md shadow-lg flex items-center gap-2 w-fit"
>
  <Github size={20} />
  GitHub
</a>

        </div>
      </section>
    </div>
  );
}



// export default function Home() {
//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2 tracking-[-.01em]">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
//               app/page.js
//             </code>
//             .
//           </li>
//           <li className="tracking-[-.01em]">
//             Save and see your changes instantly.
//           </li>
//         </ol>

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <a
//             className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={20}
//               height={20}
//             />
//             Deploy now
//           </a>
//           <a
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Read our docs
//           </a>
//         </div>
//       </main>
//       <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }
