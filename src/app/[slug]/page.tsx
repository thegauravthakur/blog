import { marked } from 'marked'
import { cn } from '@/utils/tailwind'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article } from '@/app/components/Article'
import { getAllArticles } from '@/app/page'

export default function Page({ params }: any) {
	const slug = params.slug
	const readMoreArticles = getAllArticles().slice(0, 2)
	const filePath = path.join(process.cwd(), `src/content/posts/${slug}.md`)
	const { content, data } = matter(fs.readFileSync(filePath, 'utf-8'))
	const htmlString = marked.parse(content)

	return (
		<div className={cn('mx-auto w-full max-w-4xl space-y-20')}>
			<main
				className={cn(
					'prose mt-20 dark:prose-invert',
					'prose-pre:border prose-pre:bg-white dark:prose-pre:border-dark dark:prose-pre:bg-black',
					'prose-pre:text-gray-800 dark:prose-pre:text-gray-300',
					'max-w-none prose-img:rounded-lg',
					'px-5 py-20 md:px-10',
					'rounded-xl border dark:border-dark',
				)}
			>
				<h1 className={cn('text-center')}>{data.title}</h1>
				<div className={cn('my-20')}></div>
				<div dangerouslySetInnerHTML={{ __html: htmlString }} />
			</main>
			<div
				className={cn(
					'space-y-10 rounded-xl px-5 py-10  md:px-10',
					'border dark:border-dark dark:text-white',
				)}
			>
				<h3 className={cn('text-xl font-semibold')}>Read More</h3>
				<div className={cn('grid grid-cols-1 gap-10')}>
					{readMoreArticles.map(article => (
						<Article key={article.title} metadata={article} />
					))}
				</div>
			</div>
		</div>
	)
}
