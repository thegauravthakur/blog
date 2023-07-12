import './globals.css'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'
import { Header } from '@/app/components/Header'

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
