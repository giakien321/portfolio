'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About Me', href: '/about' }, // ✅ Đã chỉnh
    { label: 'Work', href: '/#work' },
]

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="bg-[#14130F] text-white">
            <div className="max-w-6xl mx-auto flex items-center justify-center gap-12 py-4">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={clsx(
                            'text-base font-alt relative',
                            pathname === item.href &&
                                'after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-white after:bottom-[-4px] after:left-0'
                        )}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </nav>
    )
}
