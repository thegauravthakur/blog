'use client'

import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

interface ThemeIconProps {
	currentTheme: string
}
export function ThemeIcon({ currentTheme }: ThemeIconProps) {
	const [theme, setTheme] = useState(currentTheme)

	return (
		<>
			<IconButton
				aria-label="change to light mode"
				data-tooltip-content={`Change to ${theme === 'dark' ? 'light' : 'dark'} mode`}
				data-tooltip-id="theme-tooltip"
				onClick={event => {
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
			<Tooltip noArrow className="tooltip-wrapper" id="theme-tooltip" />
		</>
	)
}
