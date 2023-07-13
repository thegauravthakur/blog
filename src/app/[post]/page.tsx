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
		<div className={cn('prose prose-invert', 'mx-auto mt-10 max-w-4xl px-5')}>
			<div dangerouslySetInnerHTML={{ __html: htmlString }} />
		</div>
	)
}
