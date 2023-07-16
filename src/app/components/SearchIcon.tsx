'use client'

import { Tooltip } from '@/components/shared/Tooltip'
import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'

export function SearchIcon() {
	return (
		<>
			<Tooltip id="search-tooltip" />
			<IconButton
				aria-label="search posts"
				content="search"
				data-tooltip-content="Search"
				data-tooltip-id="search-tooltip"
				id="search-button"
				type="button"
				onClick={() => {}}
			>
				<Icon className={cn('h-6 w-6')} id="search-icon" />
			</IconButton>
		</>
	)
}
