import { cn } from '@/utils/tailwind'
import { IconAnchorButton, IconButton } from '@/components/shared/IconButton'
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
				<IconAnchorButton
					aria-label="twitter social"
					href="https://gauravthakur.in/social/twitter"
					target="_blank"
				>
					<Icon className={cn('h-6 w-6')} id="twitter-icon" />
				</IconAnchorButton>
				<IconAnchorButton
					aria-label="linkedin social"
					href="https://gauravthakur.in/social/linkedin"
					target="_blank"
				>
					<Icon className={cn('h-6 w-6')} id="linkedin-icon" />
				</IconAnchorButton>
				<IconAnchorButton
					aria-label="email social"
					href="https://gauravthakur.in/social/email"
					target="_blank"
				>
					<Icon className={cn('h-6 w-6')} id="email-icon" />
				</IconAnchorButton>
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
