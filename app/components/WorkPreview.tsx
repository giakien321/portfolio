'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { usePathname, useRouter } from 'next/navigation'

const projects = [
  { title: 'Brand Identity', image: '/BB2.png', anchor: 'branding' },
  { title: 'UX/UI', image: '/ui_ux.jpg', anchor: 'uiux' },
  { title: 'Poster', image: '/poster.jpg', anchor: 'poster' },
  { title: 'Motion Graphics', image: '/motiongraphic.jpg', anchor: 'motion' },
  { title: 'Typozine', image: '/typozine.jpg', anchor: 'typozine' },
];

export default function WorkPreview() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = (anchor: string) => {
    router.push(`/work#${anchor}`)
  }

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      container.scrollBy({ left: 500, behavior: 'smooth' })
      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollTo({ left: 0, behavior: 'smooth' })
      }
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  // Drag to scroll
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const handleMouseDown = (e: MouseEvent) => {
      isDown = true
      startX = e.pageX - container.offsetLeft
      scrollLeft = container.scrollLeft
    }

    const handleMouseLeave = () => (isDown = false)
    const handleMouseUp = () => (isDown = false)

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = (x - startX) * 1.5
      container.scrollLeft = scrollLeft - walk
    }

    container.addEventListener('mousedown', handleMouseDown)
    container.addEventListener('mouseleave', handleMouseLeave)
    container.addEventListener('mouseup', handleMouseUp)
    container.addEventListener('mousemove', handleMouseMove)

    return () => {
      container.removeEventListener('mousedown', handleMouseDown)
      container.removeEventListener('mouseleave', handleMouseLeave)
      container.removeEventListener('mouseup', handleMouseUp)
      container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <motion.section
      key={pathname}
      className="bg-white py-24 px-6 md:px-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <motion.div
        className="-mx-4 md:-mx-12 mb-10"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="w-full max-w-[500px] h-[120px] bg-[#DE7D08] text-white text-[100px] leading-none font-extrabold font-sans lowercase flex items-center justify-center rounded-md shadow-lg">
          <span className="pl-40">work.</span>
        </div>
      </motion.div>

      {/* Description */}
      <motion.p
        className="text-base leading-[24px] font-alt mb-12 mt-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Every design has a purpose. These categories show where my ideas came
        to life — click into each one to see the full journey.
      </motion.p>

      {/* Scrollable Project Cards */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-6 cursor-grab active:cursor-grabbing scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            onClick={() => handleClick(project.anchor)}
            className="relative scroll-snap-align-start w-[500px] h-[400px] flex-shrink-0 rounded-2xl overflow-hidden group shadow-lg hover:cursor-pointer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: index * 0.15 }}
            viewport={{ once: true }}
          >
            {/* Image */}
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition duration-700 ease-in-out group-hover:opacity-10"
            />

            {/* Dark overlay when hovered */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition duration-700 ease-in-out z-10" />

            {/* Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-700 ease-in-out z-20">
              <h3 className="text-white text-4xl font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] tracking-wide">
                {project.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
