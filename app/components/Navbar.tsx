'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' },
    { label: 'Work', href: '/work' },
]

export default function Navbar() {
    const pathname = usePathname()
    const [activeTab, setActiveTab] = useState<string>(pathname)

    // Update active tab on route change
    useEffect(() => {
        setActiveTab(pathname)
    }, [pathname])

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#14130F] text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-center gap-12 py-4 relative">
                {navItems.map((item) => {
                    const isActive = activeTab === item.href

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            scroll={false}
                            onClick={() => setActiveTab(item.href)}
                            className={clsx('relative text-base font-alt px-1')}
                        >
                            {item.label}
                            {isActive && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-[2px] bg-white"
                                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                                />
                            )}
                        </Link>
                    )
                })}
            </div>
        </nav>
        
    )
}
