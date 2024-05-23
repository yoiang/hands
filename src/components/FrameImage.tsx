import { Image } from './Image'

export type Props = {
    src: string

    width: number | string
    height: number | string
}

export const FrameImage = ({ src, width, height }: Props) => <Image src={`/images/frame/${src}`} className="frame" width={width} height={height} style={{ position: 'absolute' }} alt="A piece of the picture frame that surrounds the hand" />