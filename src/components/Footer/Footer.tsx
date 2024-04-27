import { css } from '../../../styled-system/css'
import { useState, useEffect } from 'react'
import Arrow from '../Arrow/Arrow'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill"
import { motion, AnimatePresence } from 'framer-motion'

interface FooterProps {
    foreignLanguage: string
    iso: string
    frenchAudio: string
}

const Footer: React.FC<FooterProps> = ({ foreignLanguage, iso, frenchAudio }) => {
    const pathname = usePathname()
    const maxPageNumber = 17

    const currentPageNumber = pathname === '/' ? 0 : parseInt(pathname.replace('/', ''), 10)

    const isLastPage = currentPageNumber === maxPageNumber

    let nextPageNumber
    switch (currentPageNumber) {
        case 0:
            nextPageNumber = '/1';
            break;
        case maxPageNumber:
            nextPageNumber = '/';
            break;
        default:
            nextPageNumber = '/' + (currentPageNumber + 1);
    }

    let prevPageNumber
    switch (currentPageNumber) {
        case 0:
            prevPageNumber = `/${maxPageNumber}`;
            break;
        case 1:
            prevPageNumber = '/';
            break;
        default:
            prevPageNumber = '/' + (currentPageNumber - 1);
    }

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    const playAudio = (file: string) => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
        const newAudio = new Audio(file);
        newAudio.play();
        setAudio(newAudio);
    };

    const stopAudio = () => {
        if (audio) {
            audio.pause();
            audio.currentTime = 0;
        }
    }

    const isoToEmoji = (isoCode: string) => {
        if (isoCode === 'catalan' || isoCode === 'kabyle') {
            const source = `/images/${isoCode}.png`
            return <Image src={source} alt={`Icône drapeau ${isoCode}`} width={24} height={36} />
        }
        return isoCode
            .split('')
            .map(letter => letter.charCodeAt(0) % 32 + 0x1F1E5)
            .map(n => String.fromCodePoint(n))
            .join('')
    }

    useEffect(() => {
        polyfillCountryFlagEmojis()
    }, [])

    return (
        <motion.footer className={css({ position: 'relative', zIndex: 10, backgroundColor: "mainWhite", height: "60px", display: "flex", justifyContent: "space-around", color: "mainBlack", borderTop: "1px solid token(colors.mainBlack)", alignItems: "center", lg: { maxWidth: '860px', margin: 'auto' } })}>
            <Link href={prevPageNumber}>
                <Arrow className={css({ color: "mainBlack", fill: 'mainBlack', transform: 'scaleX(-1)' })} onClick={() => stopAudio()} />
            </Link>
            <motion.button
                key={iso + 'flag'}
                className={css({ fontFamily: 'Twemoji Country Flags', fontSize: '2xl' })}
                onClick={() => playAudio(`/audio/${foreignLanguage}.mp3`)}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ opacity: 0, scale: 1.5 }}
                transition={{ type: "spring", duration: 0.4, bounce: 0.5 }}
            >
                {isoToEmoji(iso)}
            </motion.button>
            <button className={css({ fontFamily: 'Twemoji Country Flags', fontSize: '2xl' })} onClick={() => playAudio(`/audio/${frenchAudio}.mp3`)}>
                {isoToEmoji('FR')}
            </button>
            <Link href={nextPageNumber}>
                {
                    isLastPage ?
                        <p>Fin</p>
                        :
                        <Arrow className={css({ color: "mainBlack", fill: 'mainBlack' })} onClick={() => stopAudio()} />
                }
            </Link>
        </motion.footer >
    )
}

export default Footer;