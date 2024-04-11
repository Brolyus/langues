import { css } from '../../../styled-system/css';
import { useState, useEffect } from 'react';
import Arrow from '../Arrow/Arrow'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer: React.FC = () => {
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
            prevPageNumber = '/17';
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

    return (
        <footer className={css({ backgroundColor: "mainWhite", height: "60px", display: "flex", justifyContent: "space-around", color: "mainBlack", borderTop: "1px solid token(colors.mainBlack)", alignItems: "center" })}>
            <Link href={prevPageNumber}>
                <Arrow className={css({ color: "mainBlack", fill: 'mainBlack', transform: 'scaleX(-1)' })} onClick={() => stopAudio()} />
            </Link>
            <button className={css({ fontSize: '2xl' })} onClick={() => playAudio('/audio/1.anglais.mp3')}>
                &#127467;&#127479;
            </button>
            <button className={css({ fontSize: '2xl' })} onClick={() => playAudio('/audio/ca.mp3')}>&#127477;&#127481;</button>
            <Link href={nextPageNumber}>
                {
                    isLastPage ?
                        <p>Fin</p>
                        :
                        <Arrow className={css({ color: "mainBlack", fill: 'mainBlack' })} onClick={() => stopAudio()} />
                }
            </Link>
        </footer>
    )
}

export default Footer;