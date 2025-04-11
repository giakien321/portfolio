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
    <section className="relative bg-[#FDFCF8] py-12 overflow-hidden">
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
        className="relative z-10 max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5 }}
      >
        {/* Cột trái */}
        <motion.div className="flex flex-col" variants={item}>
          <motion.button
            className="
              w-[295px] h-[51px]
              bg-[#FFA500] text-white
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

          {/* Tiêu đề lớn */}
          <motion.h1
            className="
              text-[64px] md:text-[128px]
              font-extrabold tracking-tight font-sans
              leading-none
              mt-20 md:mt-[250px]
            "
            variants={item}
          >
            <span className="block">NGỌC THẢO</span>
            <span className="block">TRƯƠNG</span>
          </motion.h1>
        </motion.div>

        {/* Cột phải */}
        <motion.div
          className="flex flex-col items-center md:items-end text-center md:text-right"
          variants={item}
        >
          {/* Avatar */}
          <motion.div
            className="
              w-[295px] h-[360px] rounded-xl overflow-hidden mb-8
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

          {/* Mô tả */}
          <motion.p
            className="
              text-sm text-[#14130F] max-w-xs
              mt-10 md:mt-[130px] md:ml-[200px]
            "
            variants={item}
          >
            Hi, I'm Ngọc Thảo — a graphic designer with a focus on branding and UI/UX.
            My portfolio showcases a wide range of creative work that blends aesthetics
            with functionality to create meaningful, impactful designs.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
