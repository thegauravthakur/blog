import { cn } from '@/utils/tailwind'
import Link from 'next/link'
import { ArticleData } from '@/app/page'

interface ArticleProps {
	metadata: ArticleData
}

export function Article({ metadata }: ArticleProps) {
	return (
		<article
			className={cn(
				'article rounded outline-blue-500 transition-all hover:outline hover:outline-2 hover:outline-offset-4',
				' focus-within:outline focus-within:outline-2 focus-within:outline-offset-4',
				'border border-dark focus-within:border-transparent hover:border-transparent',
			)}
		>
			<Link
				className={cn(
					'h-full space-y-5 bg-dark p-8 outline-none',
					'flex flex-col justify-between',
				)}
				href={`/${metadata.slug}`}
			>
				<div className={cn('space-y-5')}>
					<h2 className={cn('font-semibold')}>{metadata.title}</h2>
					<p className={cn('text-sm leading-7')}>{metadata.description}</p>
				</div>
				<div className={cn('mt-auto flex justify-between text-sm')}>
					<p>May 29th, 2023</p>
					<p>13 comments</p>
				</div>
			</Link>
		</article>
	)
}
