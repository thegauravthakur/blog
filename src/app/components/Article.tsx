import { cn } from '@/utils/tailwind'

export function Article() {
	return (
		<article className={cn('article')}>
			<a className={cn('block space-y-5 rounded bg-gray-800 p-8')} href="#">
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
			</a>
		</article>
	)
}
