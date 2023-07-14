import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '@/app/components/Header'
import { cn } from '@/utils/tailwind'
import { Icon } from '@/components/shared/Icon'
import { IconButton } from '@/components/shared/IconButton'
import { getCookie } from 'cookies-next'
import { cookies } from 'next/headers'

const inter = Inter({ subsets: ['latin'] })

interface RootLayoutProps {
	children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	const cookieStore = cookies()
	const currentTheme = cookieStore.get('theme')

	return (
		<html data-mode={currentTheme?.value} lang="en">
			<body className={cn(inter.className, 'dark:bg-black')}>
				<Header />
				{children}
				<footer
					className={cn(
						'mx-auto max-w-screen-xl border-t border-dark bg-black text-center text-white ',
						'mt-10 space-y-5 py-5',
					)}
				>
					<div className={cn('flex items-center justify-center text-white')}>
						<IconButton>
							<Icon className={cn('h-6 w-6')} id="twitter-icon" />
						</IconButton>
						<IconButton>
							<Icon className={cn('h-6 w-6')} id="linkedin-icon" />
						</IconButton>
						<IconButton>
							<Icon className={cn('h-6 w-6')} id="email-icon" />
						</IconButton>
					</div>
					<p className={cn('flex items-center justify-center space-x-1 text-sm')}>
						<span>2023 Copyright:</span>
						<span className={cn('font-bold')}>Gaurav Thakur </span>
						<span>| Made with </span>
						<Icon className={cn('mx-1 inline-block h-5 w-5')} id="heart-icon" />
						<span>in India</span>
					</p>
				</footer>
			</body>
		</html>
	)
}
