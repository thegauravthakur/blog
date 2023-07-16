import { cn } from '@/utils/tailwind'
import Link from 'next/link'

export function MobileNavItems() {
	return (
		<nav>
			<ul className={cn('text-sm font-semibold')}>
				<li>
					<Link
						className={cn(
							'block rounded p-4 py-3 hover:bg-gray-200/50 dark:hover:bg-gray-200/20',
							'outline-2 outline-red-600 focus-visible:outline dark:outline-blue-500',
						)}
						href="/"
					>
						Home
					</Link>
				</li>
				<li>
					<a
						className={cn(
							'block rounded p-4 py-3 hover:bg-gray-200/50 dark:hover:bg-gray-200/20',
							'outline-2 outline-red-600 focus-visible:outline dark:outline-blue-500',
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
							'outline-2 outline-red-600 focus-visible:outline dark:outline-blue-500',
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
