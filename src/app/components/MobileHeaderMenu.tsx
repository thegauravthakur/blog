'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/utils/tailwind'
import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'

export function MobileHeaderMenu() {
	const router = useRouter()
	const searchParams = useSearchParams()
	const showMobileMenu = searchParams.get('showMobileMenu') === 'true'
	if (!showMobileMenu) return null

	return (
		<div
			className={cn(
				'fixed inset-x-4 top-4 rounded-lg border bg-gray-800 p-6 text-white shadow-lg',
			)}
		>
			<ul className={cn('text-sm font-semibold')}>
				<li>
					<a className={cn('block rounded p-4 py-3 hover:bg-gray-200/20')} href="#">
						Home
					</a>
				</li>
				<li>
					<a className={cn('block rounded p-4 py-3 hover:bg-gray-200/20')} href="#">
						About
					</a>
				</li>
				<li>
					<a className={cn('block rounded p-4 py-3 hover:bg-gray-200/20')} href="#">
						Thoughts
					</a>
				</li>
			</ul>
			<IconButton
				aria-label="close menu"
				className={cn('absolute right-6 top-6')}
				type="button"
				onClick={() => {
					router.replace('/')
				}}
			>
				<Icon className={cn('h-6 w-6')} id="close-icon" />
			</IconButton>
		</div>
	)
}
