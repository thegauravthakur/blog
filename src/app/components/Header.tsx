import { cn } from '@/utils/tailwind'
import { HeaderIcons } from '@/app/components/HeaderIcons'
import Link from 'next/link'
import { HeaderNavItems } from '@/app/components/HeaderNavItems'

export function Header() {
	return (
		<header className={cn('dark:bg-black')}>
			<div
				className={cn(
					'mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2 lg:px-8',
					'border-b dark:border-dark dark:text-white',
				)}
			>
				<Link
					className={cn(
						'font-bold transition-colors duration-200 hover:text-red-600 dark:hover:text-blue-500',
						'outline-1 outline-offset-4 outline-red-600',
					)}
					href="/"
				>
					Gaurav&apos;s Blog
				</Link>
				<HeaderNavItems />
				<HeaderIcons />
			</div>
		</header>
	)
}
