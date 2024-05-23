export type Props = {
    idSuffix: string
}

export const ShadowImage = ({ idSuffix }: Props) => {
    return (
        <svg height="0" xmlns="http://www.w3.org/2000/svg" className="frame-shadow" style={{
            position: 'absolute',
            zIndex: -1
        }}>
            <filter id={`drop-shadow-${idSuffix}`}>
                <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                <feOffset dx="3" dy="3" result="offsetblur" />
                <feFlood flood-color="rgba(0,0,0,0.5)" />
                <feComposite in2="offsetblur" operator="in" />
                <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                </feMerge>
            </filter>
        </svg>
    )
}