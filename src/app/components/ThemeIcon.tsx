'use client'

import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { Tooltip } from '@/components/shared/Tooltip'
import { useState } from 'react'

interface ThemeIconProps {
	currentTheme: string
}
export function ThemeIcon({ currentTheme }: ThemeIconProps) {
	const [theme, setTheme] = useState(currentTheme)

	return (
		<Tooltip message="Light mode">
			<IconButton
				aria-label="change to light mode"
				onClick={event => {
					event.currentTarget.blur()
					if (document.documentElement.dataset.mode === 'dark') {
						document.documentElement.dataset.mode = 'light'
						document.cookie = 'theme=light; ; path=/'
						setTheme('light')
					} else {
						document.documentElement.dataset.mode = 'dark'
						document.cookie = 'theme=dark; ; path=/'
						setTheme('dark')
					}
				}}
			>
				<Icon
					className={cn('h-6 w-6')}
					id={theme === 'dark' ? 'light-theme-icon' : 'moon-icon'}
				/>
			</IconButton>
		</Tooltip>
	)
}
