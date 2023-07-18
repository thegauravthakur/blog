import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '@/app/components/Header'
import { cn } from '@/utils/tailwind'
import './styles/docsearch.css'
import { cookies } from 'next/headers'
import { Footer } from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	const cookieStore = cookies()
	const currentTheme = cookieStore.get('theme')

	return (
		<html data-mode={currentTheme?.value ?? 'dark'} lang="en">
			<body className={cn(inter.className, 'dark:bg-black')} id="app">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
