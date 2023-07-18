'use client'

import { Tooltip } from '@/components/shared/Tooltip'
import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'
import { cn } from '@/utils/tailwind'
import { useState } from 'react'
import { DocSearch } from '@/app/components/DocSearch'

export function SearchIcon() {
	const [showModal, setShowModal] = useState(false)
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
				onClick={() => {
					setShowModal(!showModal)
				}}
			>
				<Icon className={cn('h-6 w-6')} id="search-icon" />
			</IconButton>
			<DocSearch
				isOpen={showModal}
				onClose={() => setShowModal(false)}
				onOpen={() => setShowModal(true)}
			/>
		</>
	)
}
