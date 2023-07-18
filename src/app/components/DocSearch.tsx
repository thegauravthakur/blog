'use client'

import { createPortal } from 'react-dom'
import { lazy } from 'react'
import { useDocSearchKeyboardEvents } from '@/app/hooks/docsearch'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface DocSearchProps {
	isOpen: boolean
	onOpen: () => void
	onClose: () => void
}

const DocSearchModal: any = lazy(() =>
	// @ts-ignore
	import('@docsearch/react/modal').then(mod => ({
		default: mod.DocSearchModal,
	})),
)

function Hit({ hit, children }: any) {
	return <Link href={hit.url}>{children}</Link>
}

export function DocSearch({ isOpen, onOpen, onClose }: DocSearchProps) {
	const router = useRouter()
	useDocSearchKeyboardEvents({ isOpen, onOpen, onClose })
	if (!isOpen) return null
	return (
		isOpen &&
		createPortal(
			<DocSearchModal
				apiKey={process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY}
				appId={process.env.NEXT_PUBLIC_ALGOLIA_APPLICATION_ID}
				hitComponent={Hit}
				indexName={process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME}
				initialScrollY={window.scrollY}
				navigator={{
					navigate({ itemUrl }: any) {
						router.push(itemUrl)
					},
				}}
				transformItems={(items: any[]) => {
					return items.map(item => {
						const url = new URL(item.url)
						return { ...item, url: item.url.replace(url.origin, '') }
					})
				}}
				onClose={onClose}
			/>,
			document.body,
		)
	)
}
