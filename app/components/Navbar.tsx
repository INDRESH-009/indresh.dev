'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = ['home', 'projects', 'research', 'engineering', 'musings']

export default function Navbar() {
  const pathname = usePathname()
  const active = pathname === '/' ? 'home' : pathname.slice(1).toLowerCase()

  return (
    <header className="w-full fixed top-0 z-50 backdrop-blur-md bg-white/80 shadow-sm border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex justify-between items-center px-4 sm:px-6 py-4">
        <div className="text-xl font-bold tracking-tight text-gray-900">
          Indresh
        </div>

        <nav className="flex flex-wrap gap-2 sm:gap-3 text-sm font-medium text-gray-600">
          {navItems.map((item) => {
            const isActive = active === item.toLowerCase()
            return (
              <Link
                key={item}
                href={item === 'home' ? '/' : `/${item}`}
                className={`capitalize px-3 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-black text-white shadow-sm'
                    : 'hover:text-black hover:bg-gray-100'
                }`}
              >
                {item}
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
