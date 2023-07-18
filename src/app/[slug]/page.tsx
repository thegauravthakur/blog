import { marked } from 'marked'
import { cn } from '@/utils/tailwind'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Article } from '@/app/components/Article'
import { getAllArticles } from '@/app/page'
import { format } from 'date-fns'
import { calculateReadingTime } from '@/utils/article'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { markedHighlight } from 'marked-highlight'
import hljs from 'highlight.js'
import '../styles/syntax-highlight.css'
import { mangle } from 'marked-mangle'
import { gfmHeadingId } from 'marked-gfm-heading-id'

function getRandomArticles(max: number) {
	return getAllArticles()
		.sort(() => Math.random() - Math.random())
		.slice(0, max)
}

type Props = {
	params: { slug: string }
	searchParams: { [key: string]: string | string[] | undefined }
}

marked.use(
	markedHighlight({
		langPrefix: 'language-',
		highlight(code, lang) {
			const language = hljs.getLanguage(lang) ? lang : 'plaintext'
			return hljs.highlight(code, { language }).value
		},
	}),
	mangle(),
	gfmHeadingId(),
)

export default function Page({ params }: Props) {
	const slug = params.slug
	const readMoreArticles = getRandomArticles(2)
	const filePath = path.join(process.cwd(), `src/content/posts/${slug}.md`)
	if (!fs.existsSync(filePath)) notFound()
	const { content, data } = matter(fs.readFileSync(filePath, 'utf-8'))
	const readingTime = calculateReadingTime(content)
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
				<div
					className={cn(
						'my-10 flex justify-around border-y py-3 text-sm font-semibold dark:border-dark',
					)}
				>
					<p className={cn('m-0')}>
						{format(new Date(data.publishedDate), 'MMMM dd, yyyy')}
					</p>
					<p className={cn('m-0')}>{readingTime} minutes read</p>
				</div>
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const slug = params.slug
	const filePath = path.join(process.cwd(), `src/content/posts/${slug}.md`)
	if (!fs.existsSync(filePath)) notFound()

	const { data } = matter(fs.readFileSync(filePath, 'utf-8'))
	return {
		title: data.title,
		description: data.metaDescription,
	}
}
