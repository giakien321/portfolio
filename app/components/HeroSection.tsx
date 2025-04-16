'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import avatar from '../assest/avatar.png'
import bg from '../assest/background.png'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section className="relative bg-[#FDFCF8] py-12 overflow-hidden pt-30">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bg}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center md:items-start justify-between"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5 }}
      >
        {/* Cột trái */}
        <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left" variants={item}>
          <motion.div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left" variants={item}>
            <a
              href="https://www.behance.net/gallery/223474077/Portfolio-2025?fbclid=IwY2xjawJo5U1leHRuA2FlbQIxMAABHuiHqFnaycFh197jef-NGjopi3IIdee5qgJmZF7qxh_56dhXX_nqNXR10dkY_aem_pQ311RGkqwm7AWRYswLoLw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="
        w-[230px] h-[44px] md:w-[295px] md:h-[51px]
        bg-[#DE7D08] text-white
        border border-[#FFA500] rounded-full
        hover:bg-white hover:text-black hover:border-black
        transition-all duration-300 ease-in-out
        hover:scale-105 hover:shadow-lg
        mb-8
      "
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View on Behance
              </motion.button>
            </a>
          </motion.div>


          <motion.h1
            className="
              font-extrabold tracking-tight font-sans 
              text-[48px] md:text-[128px] leading-none
              mt-10 md:mt-[250px]
            "
            variants={item}
          >
            <div className="flex flex-col md:flex-row md:gap-x-4">
              <span>NGỌC</span>
              <span>THẢO</span>
            </div>
            <div className="mt-5">TRƯƠNG</div>
          </motion.h1>
        </motion.div>

        {/* Cột phải */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col items-center md:items-end text-center md:text-right mt-12 md:mt-0"
          variants={item}
        >
          {/* Avatar */}
          <motion.div
            className="
              w-[250px] h-[300px] md:w-[295px] md:h-[360px]
              rounded-xl overflow-hidden mb-6 md:mb-8
              shadow-[8px_8px_0px_0px_rgba(20,19,15,1)]
              transition transform hover:-translate-y-2 hover:shadow-xl duration-300
            "
            whileHover={{ y: -8 }}
          >
            <Image
              src={avatar}
              alt="Ngọc Thảo Trương"
              width={361}
              height={361}
              className="object-cover w-full h-full"
              priority
            />
          </motion.div>

          <motion.p
            className="
              font-[Montserrat] font-normal text-base leading-6
              text-[#14130F] max-w-xs md:max-w-sm
              mt-6 md:mt-[35px] md:ml-0
            "
            variants={item}
          >
            Hi, I am Ngọc Thảo — a graphic designer with a focus on branding and UI/UX.
            My portfolio showcases a wide range of creative work that blends aesthetics
            with functionality to create meaningful, impactful designs.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
