import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { cn } from '@/utils/tailwind'
import { Icon } from '@/components/shared/Icon'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	)
}

function Header() {
	return (
		<header className={cn('flex justify-between bg-gray-800 text-white')}>
			<h1>Gaurav's Blog</h1>
			<ul className={cn('flex')}>
				<li>Home</li>
				<li>About</li>
				<li>Thoughts</li>
			</ul>
			<ul>
				<Icon className={cn('h-6 w-6')} color="white" id="search-icon" />
				<li>Theme</li>
			</ul>
		</header>
	)
}
