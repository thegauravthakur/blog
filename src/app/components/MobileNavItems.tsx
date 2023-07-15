import { cn } from '@/utils/tailwind'

export function MobileNavItems() {
	return (
		<nav>
			<ul className={cn('text-sm font-semibold')}>
				<li>
					<a
						className={cn(
							'block rounded p-4 py-3 hover:bg-gray-200/50 dark:hover:bg-gray-200/20',
						)}
						href="#"
					>
						Home
					</a>
				</li>
				<li>
					<a
						className={cn(
							'block rounded p-4 py-3 hover:bg-gray-200/50 dark:hover:bg-gray-200/20',
						)}
						href="#"
					>
						About
					</a>
				</li>
				<li>
					<a
						className={cn(
							'block rounded p-4 py-3 hover:bg-gray-200/50 dark:hover:bg-gray-200/20',
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
