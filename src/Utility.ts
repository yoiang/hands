export const swapImage = (imageNamedItem: string, newImageSrc: string) => {
    const imageElement = document.images.namedItem(imageNamedItem)

    return swapImageElement(imageElement, newImageSrc)
}

export const swapImageAtIndex = (imageIndex: number, newImageSrc: string) => {
    const imageElement = document.images[imageIndex]

    return swapImageElement(imageElement, newImageSrc)
}

const swapImageElement = (imageElement: HTMLImageElement | null, newImageSrc: string) => {
    if (!imageElement) {
        return
    }

    imageElement.src = newImageSrc
    return true
}