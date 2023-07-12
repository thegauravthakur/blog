import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { cn } from '@/utils/tailwind'

export function IconButton(
	props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
	return (
		<button
			{...props}
			className={cn('rounded-full p-2 transition-colors duration-200 hover:bg-gray-200/20')}
		/>
	)
}
