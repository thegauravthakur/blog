'use client'

import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { Tooltip } from '@/components/shared/Tooltip'
import { useState } from 'react'
import { MobileHeaderMenu } from '@/app/components/MobileHeaderMenu'

export function MobileHeaderTriggerIcon() {
	const [showMobileMenu, setShowMobileMenu] = useState(false)
	return (
		<>
			<Tooltip id="more-items-tooltip" />
			<IconButton
				aria-label="more items"
				data-tooltip-content="More items"
				data-tooltip-id="more-items-tooltip"
				onClick={() => {
					setShowMobileMenu(true)
				}}
			>
				<Icon className={cn('h-6 w-6')} id="vertical-ellipsis-icon" />
			</IconButton>
			<MobileHeaderMenu
				setShowMobileMenu={setShowMobileMenu}
				showMobileMenu={showMobileMenu}
			/>
		</>
	)
}
