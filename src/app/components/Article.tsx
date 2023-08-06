import { cn } from '@/utils/tailwind'
import Link from 'next/link'
import { format } from 'date-fns'
import { ArticleData } from '@/app/page'

interface ArticleProps {
	metadata: ArticleData
}

export function Article({ metadata }: ArticleProps) {
	return (
		<article
			className={cn(
				'article rounded transition-all hover:outline hover:outline-2 hover:outline-offset-4',
				' focus-within:outline focus-within:outline-2 focus-within:outline-offset-4',
				'focus-within:border-transparent hover:border-transparent focus-within:dark:border-transparent dark:hover:border-transparent',
				'border outline-red-600 dark:border-dark dark:outline-blue-500',
			)}
		>
			<Link
				className={cn(
					'h-full space-y-5 p-8 outline-none',
					'flex flex-col justify-between',
					'dark:bg-dark',
				)}
				href={`/${metadata.slug}`}
			>
				<div className={cn('space-y-5')}>
					<h2 className={cn('font-semibold')}>{metadata.title}</h2>
					<p className={cn('text-sm leading-7')}>{metadata.description}</p>
				</div>
				<div className={cn('mt-auto flex justify-between text-sm')}>
					<p>{format(new Date(metadata.publishedDate), 'MMMM dd, yyyy')}</p>
					<p>{metadata.readingTime} minutes read</p>
				</div>
			</Link>
		</article>
	)
}
