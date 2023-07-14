'use client'

import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { IconButton } from '@/components/shared/IconButton'
import { Tooltip } from '@/components/shared/Tooltip'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

export function HeaderIcons() {
	const [router, pathname, searchParams] = [useRouter(), usePathname(), useSearchParams()]

	return (
		<>
			<li>
				<Tooltip message="Search">
					<IconButton aria-label="search" type="button" onClick={() => {}}>
						<Icon className={cn('h-6 w-6')} id="search-icon" />
					</IconButton>
				</Tooltip>
			</li>
			<li>
				<Tooltip message="Light mode">
					<IconButton
						aria-label="change to light mode"
						type="button"
						onClick={() => {
							if (document.documentElement.dataset.mode === 'dark') {
								document.documentElement.dataset.mode = 'light'
								document.cookie = 'theme=light; ; path=/'
							} else {
								document.documentElement.dataset.mode = 'dark'
								document.cookie = 'theme=dark; ; path=/'
							}
						}}
					>
						<Icon className={cn('h-6 w-6')} id="light-theme-icon" />
					</IconButton>
				</Tooltip>
			</li>
			<li className={cn('sm:hidden')}>
				<Tooltip message="More Items">
					<IconButton
						aria-label="more items"
						type="button"
						onClick={() => {
							const search = new URLSearchParams(searchParams.toString())
							search.set('showMobileMenu', 'true')
							router.push(`${pathname}?${search.toString()}`)
						}}
					>
						<Icon className={cn('h-6 w-6')} id="vertical-ellipsis-icon" />
					</IconButton>
				</Tooltip>
			</li>
		</>
	)
}
