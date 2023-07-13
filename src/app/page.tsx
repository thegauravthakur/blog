import { cn } from '@/utils/tailwind'
import { Article } from '@/app/components/Article'

export default function Home() {
	return (
		<div
			className={cn(
				'mx-auto mt-10 max-w-screen-xl px-4 py-10 text-white lg:px-8',
				'grid grid-cols-1 gap-5 md:gap-8 lg:grid-cols-2 lg:gap-10',
			)}
		>
			<Article />
			<Article />
			<Article />
			<Article />
			<Article />
		</div>
	)
}
