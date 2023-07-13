import { marked } from 'marked'
import { cn } from '@/utils/tailwind'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default function Page() {
	const filePath = path.join(process.cwd(), 'src/content/posts/who-is-gaurav-thakur.md')
	const { content } = matter(fs.readFileSync(filePath, 'utf-8'))
	const htmlString = marked.parse(content)
	return (
		<div
			className={cn(
				'prose prose-invert mt-20',
				'prose-img:rounded-lg',
				'mx-auto max-w-4xl px-5 py-20 md:px-10',
				'rounded-xl border border-dark',
			)}
		>
			<h1 className={cn('text-center')}>Gaurav Thakur: How it all started?</h1>
			<div className={cn('my-20')}></div>
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</div>
	)
}
