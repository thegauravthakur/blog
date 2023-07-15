'use client'

import { cn } from '@/utils/tailwind'
import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import ReactFocusLock from 'react-focus-lock'
import { useEffect } from 'react'

interface MobileHeaderMenuProps {
	showMobileMenu: boolean
	setShowMobileMenu: (showMobileMenu: boolean) => void
}
export function MobileHeaderMenu(props: MobileHeaderMenuProps) {
	/**
	 * Prevent scrolling when the mobile menu is open
	 */
	useEffect(() => {
		document.body.style.overflow = props.showMobileMenu ? 'hidden' : 'auto'
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [props.showMobileMenu])

	if (!props.showMobileMenu) return null

	return (
		<div className={cn('absolute inset-0 backdrop-blur-sm')}>
			<ReactFocusLock>
				<div
					className={cn(
						'fixed inset-x-4 top-4 rounded-lg  p-6',
						'border bg-white shadow-lg dark:border-dark dark:bg-dark dark:text-white',
					)}
				>
					<ul className={cn('text-sm font-semibold')}>
						<li>
							<a
								className={cn('block rounded p-4 py-3 hover:bg-gray-200/20')}
								href="#"
							>
								Home
							</a>
						</li>
						<li>
							<a
								className={cn('block rounded p-4 py-3 hover:bg-gray-200/20')}
								href="#"
							>
								About
							</a>
						</li>
						<li>
							<a
								className={cn('block rounded p-4 py-3 hover:bg-gray-200/20')}
								href="#"
							>
								Thoughts
							</a>
						</li>
					</ul>
					<IconButton
						aria-label="close menu"
						className={cn('absolute right-6 top-6')}
						type="button"
						onClick={() => props.setShowMobileMenu(false)}
					>
						<Icon className={cn('h-6 w-6')} id="close-icon" />
					</IconButton>
				</div>
			</ReactFocusLock>
		</div>
	)
}
