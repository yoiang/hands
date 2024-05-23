import { useCallback } from 'react'
import { compareFingers } from '../Fingers'
import { swapImage } from '../Utility'
import { hands } from '../data/hands'
import { FingerId, Hand } from '../model/Types'
import { Image } from './Image'
const cloneDeep = require('lodash/cloneDeep')

export type Props = {
    width: number
    height: number

    hand: Hand
    fingerIndex: FingerId

    setHand: (hand: Hand) => void
    setHandIndex: (handIndex: number) => void
}

export const FingerImage = ({ width, height, hand, fingerIndex, setHand, setHandIndex }: Props) => {
    const finger = hand.fingers[fingerIndex]

    const { regular, alternative } = finger

    const imageName = `Img${regular}${fingerIndex}`
    const image = `/images/hand/${regular}_${fingerIndex}.jpg`
    const altImage = `images/hand/${alternative}_${fingerIndex}.jpg`

    const onMouseEnter = useCallback(() => {
        swapImage(imageName, altImage)
    }, [altImage, imageName])

    const onMouseLeave = useCallback(() => {
        swapImage(imageName, image)
    }, [image, imageName])

    const onClick = useCallback(() => {
        const newHand = cloneDeep(hand)
        newHand.name = "-"
        newHand.description = ""
        newHand.fingers[fingerIndex].regular = alternative
        newHand.fingers[fingerIndex].alternative = regular

        const matchIndex = hands.findIndex((test) => {
            return compareFingers(test.fingers, newHand.fingers)
        })
        if (matchIndex !== -1) {
            setHandIndex(matchIndex)
            // TODO: chain automatically
            setHand(hands[matchIndex])
        } else {
            setHand(newHand)
        }
    }, [alternative, fingerIndex, hand, regular, setHand, setHandIndex])

    return <Image
        name={imageName}
        src={image}
        width={width}
        height={height}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
        alt={`Finger ${fingerIndex}`} />
}