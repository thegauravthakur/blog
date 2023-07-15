'use client'
import { ITooltip, Tooltip as T } from 'react-tooltip'

export function Tooltip(props: ITooltip) {
	return <T noArrow className="tooltip-wrapper" {...props} />
}
