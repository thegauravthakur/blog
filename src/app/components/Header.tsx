import { cn } from '@/utils/tailwind'
import { HeaderIcons } from '@/app/components/HeaderIcons'

export function Header() {
	return (
		<header className={cn('bg-gray-800')}>
			<div
				className={cn(
					'mx-auto flex max-w-screen-xl items-center justify-between p-2 text-white lg:px-8',
				)}
			>
				<a className={cn('font-bold')} href="#">
					Gaurav&apos;s Blog
				</a>
				<ul className={cn('flex items-center space-x-8 text-sm font-semibold')}>
					<li>
						<a href="#">Home</a>
					</li>
					<li>
						<a href="#">About</a>
					</li>
					<li>
						<a href="#">Thoughts</a>
					</li>
				</ul>
				<ul className={cn('flex space-x-2')}>
					<HeaderIcons />
				</ul>
			</div>
		</header>
	)
}
