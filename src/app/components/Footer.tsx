import { cn } from '@/utils/tailwind'
import { IconButton } from '@/components/shared/IconButton'
import { Icon } from '@/components/shared/Icon'

export function Footer() {
	return (
		<footer
			className={cn(
				'mx-auto max-w-screen-xl border-t text-center',
				'mt-10 space-y-5 py-5',
				'dark:border-dark dark:bg-black dark:text-white',
			)}
		>
			<div className={cn('flex items-center justify-center')}>
				<IconButton type="button">
					<Icon className={cn('h-6 w-6')} id="twitter-icon" />
				</IconButton>
				<IconButton type="button">
					<Icon className={cn('h-6 w-6')} id="linkedin-icon" />
				</IconButton>
				<IconButton type="button">
					<Icon className={cn('h-6 w-6')} id="email-icon" />
				</IconButton>
			</div>
			<p className={cn('flex items-center justify-center space-x-1 text-sm')}>
				<span>2023 Copyright:</span>
				<span className={cn('font-bold')}>Gaurav Thakur </span>
				<span>| Made with </span>
				<Icon className={cn('mx-1 inline-block h-5 w-5')} id="heart-icon" />
				<span>in India</span>
			</p>
		</footer>
	)
}
