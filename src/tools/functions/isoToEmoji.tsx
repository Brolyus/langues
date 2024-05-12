import Image from "next/image"

const isoToEmoji = (isoCode: string) => {
    if (isoCode === 'catalan' || isoCode === 'kabyle') {
        const source = `/images/${isoCode}.png`
        return <Image src={source} alt={`Icône drapeau ${isoCode}`} width={24} height={36} style={{ borderRadius: '5px' }} />
    }
    return isoCode
        .split('')
        .map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5)
        .map(n => String.fromCodePoint(n))
        .join('')
}

export default isoToEmoji