import { marked } from 'marked'
import { cn } from '@/utils/tailwind'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article } from '@/app/components/Article'
import { getAllArticles } from '@/app/page'

export default function Page() {
	const readMoreArticles = getAllArticles().slice(0, 2)
	const filePath = path.join(process.cwd(), 'src/content/posts/who-is-gaurav-thakur.md')
	const { content } = matter(fs.readFileSync(filePath, 'utf-8'))
	const htmlString = marked.parse(content)

	return (
		<div className={cn('mx-auto w-full max-w-4xl space-y-20')}>
			<div
				className={cn(
					'prose prose-invert mt-20',
					'max-w-none prose-img:rounded-lg',
					'px-5 py-20 md:px-10',
					'rounded-xl border border-dark',
				)}
			>
				<h1 className={cn('text-center')}>Gaurav Thakur: How it all started?</h1>
				<div className={cn('my-20')}></div>
				<div dangerouslySetInnerHTML={{ __html: htmlString }} />
			</div>
			<div
				className={cn(
					'space-y-10 rounded-xl border border-dark px-5 py-10 text-white md:px-10',
				)}
			>
				<h3 className={cn('text-xl font-semibold')}>Read More</h3>
				<div className={cn('grid grid-cols-1 gap-10 lg:grid-cols-2')}>
					{readMoreArticles.map(article => (
						<Article key={article.title} metadata={article} />
					))}
				</div>
			</div>
		</div>
	)
}
