import { SVGProps } from 'react'

interface IconProps {
	id: string
}

export function Icon({ id, ...props }: IconProps & SVGProps<SVGSVGElement>) {
	return (
		<svg {...props}>
			<use href={`/sprite.svg#${id}`} />
		</svg>
	)
}
