export type Finger = {
  regular: number
  alternative: number
}

export type FingerId = '0' | '1' | '2' | '3' | '4'
export type Fingers = Record<FingerId, Finger>

export type Hand = {
  name: string
  description?: string
  fingers: Fingers
}