import { headers } from 'next/headers'

export function getServerSearchParam() {
	const url = headers().get('referer') ?? ''
	return new URL(url).searchParams
}
