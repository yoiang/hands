import { FingerId, Fingers } from './model/Types'

export const compareFingers = (left: Fingers, right: Fingers) => {
    const keys = Object.keys(left) as FingerId[]

    return keys.reduce((accumulated, currentFingerKey) => {
        if (accumulated === false) {
            return false
        }

        const testFinger = left[currentFingerKey as FingerId]
        const newFinger = right[currentFingerKey as FingerId]

        return testFinger.regular === newFinger.regular &&
            testFinger.alternative === newFinger.alternative
    }, true)
}