import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { IconAnchorButton } from '@/components/shared/IconButton'
import { Tooltip } from '@/components/shared/Tooltip'
import { cookies } from 'next/headers'
import { ThemeIcon } from '@/app/components/ThemeIcon'
import { MobileHeaderTriggerIcon } from '@/app/components/MobileHeaderTriggerIcon'

export function HeaderIcons() {
	const currentTheme = cookies().get('theme')?.value ?? 'light'
	return (
		<>
			<li>
				<Tooltip message="Search">
					<IconAnchorButton aria-label="search" href="#" type="button">
						<Icon className={cn('h-6 w-6')} id="search-icon" />
					</IconAnchorButton>
				</Tooltip>
			</li>
			<li>
				<ThemeIcon currentTheme={currentTheme} />
			</li>
			<li className={cn('sm:hidden')}>
				<MobileHeaderTriggerIcon />
			</li>
		</>
	)
}
