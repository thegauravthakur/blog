'use client'

import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { IconButton } from '@/components/shared/IconButton'
import { Tooltip } from '@/components/shared/Tooltip'

export function HeaderIcons() {
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
				<Tooltip message="light mode">
					<IconButton aria-label="change to light mode" type="button" onClick={() => {}}>
						<Icon className={cn('h-6 w-6')} id="light-theme-icon" />
					</IconButton>
				</Tooltip>
			</li>
		</>
	)
}
