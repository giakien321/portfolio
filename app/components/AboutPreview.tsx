'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function AboutPreview() {
  return (
    <section className="bg-gradient-to-b from-[#FDFCF8] to-[#FCF9F2] py-20 md:py-24 px-4 md:px-12 text-[#14130F] font-sans">
      <div className="-mx-4 md:-mx-12">
        {/* Tiêu đề lớn */}
        <motion.div
          className="w-full max-w-[500px] h-[100px] bg-[#DE7D08] text-white text-[60px] md:text-[100px] leading-none font-extrabold lowercase flex items-center justify-center rounded-md shadow-lg"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ amount: 0.5, once: true }}
        >
          <span className="pl-40">about.</span>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-x-6">
        {/* Đoạn giới thiệu ngắn */}
        <motion.div
          className="col-span-12 md:col-span-9"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ amount: 0.5, once: true }}
        >
          <p className="text-base leading-[24px] font-alt mb-12 mt-4">
            I’m currently a third-year student at FPT University, majoring in Graphic Design.
            Although I’m still studying, I’ve been fortunate to gain valuable experience through
            the following projects and roles.
          </p>
        </motion.div>

        {/* Timeline + nút */}
        <motion.div
          className="col-span-12 md:col-start-4 md:col-span-9 space-y-16 relative"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ amount: 0.5, once: true }}
        >
          <div className="flex flex-col gap-14 pl-10">

            {/* 1. Video Editor */}
            <motion.div className="relative pb-8" variants={item}>
              <div className="absolute left-[-30px] top-1.5 w-[2px] h-[320px] bg-black" />
              <div className="absolute left-[-38px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
              <h3 className="font-semibold font-alt text-[20px]">
                2020 - 2023 <span className="font-alt font-semibold">/ Video Editor</span>
              </h3>
              <p className="font-semibold font-alt text-base leading-6">Tieng Viet Giau Dep organization</p>
              <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                <li className="font-alt text-base leading-8">
                  Selected and arranged video clips, visuals, and audio to align with the content’s theme.
                </li>
                <li className="font-alt text-base leading-8">
                  Researched topics and structured video scripts to match the intended tone and format.
                </li>
                <li className="font-alt text-base leading-8">
                  Handled end-to-end editing for <strong>more than 15 videos</strong>, including cutting,
                  transitions, sound mixing, and adding visual elements.
                </li>
              </ul>
            </motion.div>

            {/* 2. Webtoon Editor */}
            <motion.div className="relative pb-8" variants={item}>
              <div className="absolute left-[-30px] top-1.5 w-[2px] h-[220px] bg-black" />
              <div className="absolute left-[-38px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
              <h3 className="font-semibold font-alt text-[20px]">
                2023 - 2024 <span className="font-alt font-semibold">/ Freelance Webtoon Editor</span>
              </h3>
              <p className="font-semibold font-alt text-base leading-6">Nevi Digital</p>
              <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                <li className="font-alt text-base leading-8">
                  Successfully completed <strong>over 30 comic chapters</strong>.
                </li>
                <li className="font-alt text-base leading-8">
                  Handled tasks such as speech font selection, bubble formatting, text placement, and redraws.
                </li>
              </ul>
            </motion.div>

            {/* 3. Freelance Designer */}
            <motion.div className="relative" variants={item}>
              <div className="absolute left-[-38px] top-1.5 w-4 h-4 rounded-full bg-black z-10" />
              <h3 className="font-semibold font-alt text-[20px]">
                Jan 2025 - Mar 2025 <span className="font-semibold font-alt">/ Freelance Designer</span>
              </h3>
              <p className="font-semibold font-alt text-base leading-6">Minh Dung Coffee Co., Ltd.</p>
              <ul className="list-disc ml-5 mt-1 text-sm leading-relaxed">
                <li className="font-alt text-base leading-6">
                  Took on the role of <strong>team leader</strong>, overseeing the brand identity system.
                </li>
                <li className="font-alt text-base leading-6">
                  Designed the logo, packaging and website for the brand.
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Nút "See More" */}
          <motion.div
            className="col-span-12 md:col-start-10 md:col-span-3 mt-16 text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ amount: 0.5, once: true }}
          >
            <div className="flex justify-end mt-8">
              <Link
                href="/about"
                className="w-[190px] h-[50px] bg-[#DE7D08] text-white rounded-full hover:bg-orange-700 transition shadow-md flex items-center justify-center text-base font-alt text-[20px] hover:scale-105 duration-300"
              >
                See More
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
