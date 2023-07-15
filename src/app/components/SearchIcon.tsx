import { Tooltip } from '@/components/shared/Tooltip'
import { IconAnchorButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'

export function SearchIcon() {
	return (
		<>
			<Tooltip id="search-tooltip" />
			<IconAnchorButton
				aria-label="search"
				content="search"
				data-tooltip-content="Search"
				data-tooltip-id="search-tooltip"
				href="#"
				id="search-button"
				type="button"
			>
				<Icon className={cn('h-6 w-6')} id="search-icon" />
			</IconAnchorButton>
		</>
	)
}
