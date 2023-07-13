import { cn } from '@/utils/tailwind'
import { HeaderIcons } from '@/app/components/HeaderIcons'
import { MobileHeaderMenu } from '@/app/components/MobileHeaderMenu'
import Link from 'next/link'

export function Header() {
	return (
		<header className={cn('bg-gray-800')}>
			<div
				className={cn(
					'mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2 text-white lg:px-8',
				)}
			>
				<Link className={cn('font-bold')} href="/">
					Gaurav&apos;s Blog
				</Link>
				<ul className={cn('hidden items-center space-x-8 text-sm font-semibold sm:flex')}>
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
			<MobileHeaderMenu />
		</header>
	)
}
