import { ReactElement } from 'react'
import { cn } from '@/utils/tailwind'

interface TooltipProps {
	message: string
	children: ReactElement
}

export function Tooltip({ message, children }: TooltipProps) {
	return (
		<div className={cn('group relative flex')}>
			{children}
			<span
				className={cn(
					'absolute right-0 top-[50px] min-w-max scale-0 rounded bg-gray-800 p-2',
					'text-xs text-white transition-all group-focus-within:scale-100 group-hover:scale-100',
				)}
			>
				{message}
			</span>
		</div>
	)
}
