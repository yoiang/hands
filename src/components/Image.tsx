import { CSSProperties, MouseEventHandler } from 'react'
import { siteConfig } from '../siteConfig'

export type Props = {
    name?: string
    src: string // Public folder
    className?: string
    style?: CSSProperties
    width: number | string
    height: number | string
    onMouseEnter?: MouseEventHandler<HTMLImageElement>
    onMouseLeave?: MouseEventHandler<HTMLImageElement>
    onClick?: MouseEventHandler<HTMLImageElement>
    alt: string
}

export const Image = ({ name, src, className, style, width, height, onMouseEnter, onMouseLeave, onClick, alt }: Props) => (<img
    data-name={name}
    src={`${siteConfig.publicFileRoot}${src}`}
    className={className}
    style={{
        ...style,
        width,
        height
    }}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    alt={alt} />)