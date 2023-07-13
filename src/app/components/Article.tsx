import { cn } from '@/utils/tailwind'
import Link from 'next/link'

export function Article() {
	return (
		<article
			className={cn(
				'article rounded outline-blue-500 transition-all hover:outline hover:outline-2 hover:outline-offset-4',
				' focus-within:outline focus-within:outline-2 focus-within:outline-offset-4',
				'border border-dark focus-within:border-transparent hover:border-transparent',
			)}
		>
			<Link
				className={cn('block space-y-5 bg-dark p-8 outline-none')}
				href="/who-is-gaurav-thakur"
			>
				<h2 className={cn('font-semibold')}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</h2>
				<p className={cn('text-sm')}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet consectetur
					dolorem ducimus omnis. Commodi dolore eaque est iste nihil, odio quae
					repudiandae
				</p>
				<div className={cn('flex justify-between text-sm')}>
					<p>May 29th, 2023</p>
					<p>13 comments</p>
				</div>
			</Link>
		</article>
	)
}
