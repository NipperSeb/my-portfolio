import React from 'react'
import Link from "next/link";
import Image from "next/image";
import twitter from "../../public/img/twitter.png"
import linkedin from "../../public/img/linkedin.png"
import email from "../../public/img/email.png"


export const Footer = () => {
  return (
    <footer className="w-full bg-white shadow-footer mt-12 py-4  bottom-0">
      <div className="flex items-center justify-center gap-4">
        <Link href="https://github.com/">
          <Image
            src={twitter}
            alt="lien twitter"
            width={32}
            height={32}
            className="w-10 h-10"
          />
        </Link>
        <Link href="https://github.com/">
          <Image
            src={email}
            alt="lien email"
            width={32}
            height={32}
            className="w-10 h-10"
          />
        </Link>
        <Link href="https://github.com/">
          <Image
            src={linkedin}
            alt="lien linkedin"
            width={32}
            height={32}
            className="w-10 h-10"
          />
        </Link>
      </div>
      <div className="flex justify-center items-center text-base leading-5 text-[#abb2bf] w-full my-4">
        <p>© Copyright {new Date().getFullYear()}.</p>
      </div>
    </footer>
  )
}

