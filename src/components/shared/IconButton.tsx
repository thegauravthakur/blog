import { ButtonHTMLAttributes, ComponentProps, DetailedHTMLProps } from 'react'
import { cn } from '@/utils/tailwind'
import Link, { LinkProps } from 'next/link'

export function IconButton(
	props: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
) {
	return (
		<button
			{...props}
			className={cn(
				props.className,
				'rounded-full p-2 transition-colors duration-200',
				'hover:bg-gray-200/50 focus:bg-gray-200/50 dark:hover:bg-gray-200/20 dark:hover:focus:bg-gray-200/20',
				'focus:outline-none',
			)}
		/>
	)
}

export function IconAnchorButton(props: ComponentProps<typeof Link>) {
	return (
		<Link
			{...props}
			className={cn(
				'rounded-full p-2 transition-colors duration-200',
				'hover:bg-gray-200/50 focus:bg-gray-200/50 dark:hover:bg-gray-200/20 dark:hover:focus:bg-gray-200/20',
				'focus:outline-none',
			)}
		/>
	)
}
