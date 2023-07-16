import { cn } from '@/utils/tailwind'

export function HeaderNavItems() {
	return (
		<nav>
			<ul className={cn('hidden items-center space-x-8 text-sm font-semibold sm:flex')}>
				<li>
					<a
						className={cn(
							'transition-colors duration-200 hover:text-red-600 dark:hover:text-blue-500',
							'outline-2 outline-offset-4 outline-red-600 focus-visible:outline dark:outline-blue-500',
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
							'outline-2 outline-offset-4 outline-red-600 focus-visible:outline dark:outline-blue-500',
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
							'outline-2 outline-offset-4 outline-red-600 focus-visible:outline dark:outline-blue-500',
						)}
						href="#"
					>
						Thoughts
					</a>
				</li>
			</ul>
		</nav>
	)
}
