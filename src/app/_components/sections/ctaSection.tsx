import Link from 'next/link'
import React from 'react'
import { CgMail } from 'react-icons/cg'
import { FaGooglePlusG, FaLinkedin, FaX } from 'react-icons/fa6'

const CtaSection = () => {
    return (
        <section className="h-full w-full min-h-[60vh] lg:min-h-[90vh] lg:px-28 px-3 my-20 flex flex-col items-center justify-center">
            <button className="cursor-pointer py-[5%] px-[15%] lg:py-[8%] lg:px-[15%] bg-foreground text-background  font-black text-[2rem] lg:text-[4rem] hover:scale-75 transition-all duration-1000">CONNECT WITH <span className="bg-yellow-400 hover:scale-200 z-50">DAN</span></button>

            <div className="flex-r-center my-10">
                <Link className="flex mx-2 items-center  hover:bg-yellow-400 hover:text-background transition-colors" href="#"><FaX /><span className="mx-2">X</span></Link>
                <Link className="flex mx-2 items-center  hover:bg-yellow-400 hover:text-background transition-colors" href="#"><CgMail /><span className="mx-2">Mail</span></Link>
                <Link className="flex mx-2 items-center  hover:bg-yellow-400 hover:text-background transition-colors" href="#"><FaLinkedin /><span className="mx-2">LinkedIn</span> </Link>
            </div>
        </section>
    )
}

export default CtaSection
