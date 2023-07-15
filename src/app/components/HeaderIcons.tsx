import { cn } from '@/utils/tailwind'
import { cookies } from 'next/headers'
import { ThemeIcon } from '@/app/components/ThemeIcon'
import { MobileHeaderTriggerIcon } from '@/app/components/MobileHeaderTriggerIcon'
import { SearchIcon } from '@/app/components/SearchIcon'

export function HeaderIcons() {
	const currentTheme = cookies().get('theme')?.value ?? 'dark'
	return (
		<ul className={cn('flex space-x-2')}>
			<li>
				<SearchIcon />
			</li>
			<li>
				<ThemeIcon currentTheme={currentTheme} />
			</li>
			<li className={cn('md:hidden')}>
				<MobileHeaderTriggerIcon />
			</li>
		</ul>
	)
}
