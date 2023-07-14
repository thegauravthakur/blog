import { ReactElement } from 'react'
import { cn } from '@/utils/tailwind'

interface TooltipProps {
	message: string
	children: ReactElement
}

export function Tooltip({ message, children }: TooltipProps) {
	return (
		<div className={cn('group relative flex')} role="tooltip">
			{children}
			<span
				className={cn(
					'absolute right-0 top-[49px] min-w-max scale-0 rounded p-2',
					'text-xs transition-all group-focus-within:scale-100 group-hover:scale-100',
					'border dark:border-dark dark:bg-black dark:text-white',
				)}
			>
				{message}
			</span>
		</div>
	)
}
