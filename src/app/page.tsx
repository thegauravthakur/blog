import { cn } from '@/utils/tailwind'
import { Article } from '@/app/components/Article'
import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

export interface ArticleData {
	title: string
	publishedDate: string
	author: string
	description: string
	metaDescription: string
	tags: string
	slug: string
}

export function getAllArticles(): ArticleData[] {
	const folderPath = path.join(process.cwd(), 'src/content/posts')
	const folder = fs.readdirSync(folderPath)
	const articles = folder.map(file => {
		const filePath = path.join(folderPath, file)
		const fileContent = fs.readFileSync(filePath, 'utf8')
		return { ...matter(fileContent).data, slug: file.replace('.md', '') }
	}) as ArticleData[]
	return articles.sort((a, b) => {
		return new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
	})
}

export default function Home() {
	const articles = getAllArticles()
	return (
		<div
			className={cn(
				'mx-auto mt-10 max-w-screen-xl px-4 py-10 lg:px-8',
				'grid grid-cols-1 gap-5 md:gap-8 lg:grid-cols-2 lg:gap-10',
				'dark:text-white',
			)}
		>
			{articles.map(article => (
				<Article key={article.title} metadata={article} />
			))}
		</div>
	)
}
