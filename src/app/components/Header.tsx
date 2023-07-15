import { cn } from '@/utils/tailwind'
import { HeaderIcons } from '@/app/components/HeaderIcons'
import Link from 'next/link'

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
					)}
					href="/"
				>
					Gaurav&apos;s Blog
				</Link>
				<ul className={cn('hidden items-center space-x-8 text-sm font-semibold sm:flex')}>
					<li>
						<a
							className={cn(
								'transition-colors duration-200 hover:text-red-600 dark:hover:text-blue-500',
							)}
							href="#"
						>
							Home
						</a>
					</li>
					<li>
						<a
							className={cn(
								'transition-colors duration-200 hover:text-red-600 dark:hover:text-blue-500',
							)}
							href="#"
						>
							About
						</a>
					</li>
					<li>
						<a
							className={cn(
								'transition-colors duration-200 hover:text-red-600 dark:hover:text-blue-500',
							)}
							href="#"
						>
							Thoughts
						</a>
					</li>
				</ul>
				<ul className={cn('flex space-x-2')}>
					<HeaderIcons />
				</ul>
			</div>
		</header>
	)
}
