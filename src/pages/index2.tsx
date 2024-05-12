import { css } from '../../styled-system/css';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import mainImage from '/public/images/home.jpg'
import Link from 'next/link'
import homeData from '@/tools/homeData.json'
import { motion } from 'framer-motion';
import ArrowComponent from '@/components/Arrow/Arrow';
import SoundComponent from '@/components/SoundComponent/SoundComponent';
import isoToEmoji from '@/tools/functions/isoToEmoji';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';

export default function Home() {
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
    useEffect(() => {
        polyfillCountryFlagEmojis()
    }, [])

    return (
        <div className={css({ font: 'arial', flexDirection: 'column', alignItems: 'center', color: 'mainWhite', fontSize: "2xl", fontWeight: 'bold', backgroundColor: '#1f1e23', width: '100%', display: 'flex', justifyContent: 'space-around' })}>
            <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })}>
                <Image src={mainImage} alt='Image de couverture de loup noir' className={css({})} priority />
            </div>
            <section className={css({ width: '100%' })}>
                {homeData?.map((element, index) => (
                    <div
                        className={css({ color: 'maintWhite', backgroundColor: 'mainBlack', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' })}
                        onClick={() => playAudio(`/audio/titles/title_${element.foreignLanguage}.mp3`)}
                        key={index + 'title'}
                    >
                        <motion.p
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            whileHover={{ scale: 1.2 }}
                            className={css({ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '5px' })}
                        >
                            {element.title}
                        </motion.p>
                        <motion.span
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            whileHover={{ scale: 1.2 }}
                            className={css({ margin: '5px', fontFamily: 'Twemoji Country Flags', fontSize: '2xl' })}
                        >
                            {isoToEmoji('fr')}
                        </motion.span>
                        <motion.span
                            className={css({ margin: '5px', marginTop: '10px', fill: 'mainWhite', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' })}
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, type: 'spring' }}
                            whileHover={{ scale: 1.2 }}
                        >
                            <SoundComponent />
                        </motion.span>
                    </div>
                ))
                }
            </section>
            <motion.div
                className={css({ display: 'flex', justifyContent: 'center', margin: '50px', alignItems: 'center', color: 'secondGreen', fontSize: 'md', padding: '3', backgroundColor: 'mainGreen', width: '200px', border: '1px solid token(colors.mainGreen)', zIndex: '10', borderRadius: '5px', cursor: 'pointer' })}
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring' }}
            >
                <Link href='/1' onClick={() => stopAudio()}>
                    <button className={css({ cursor: 'pointer' })}>Demarrer l&apos;histoire</button>
                </Link>
            </motion.div>
            <motion.div
                className={css({ position: 'fixed', right: '20px', top: 'calc(100% - 96px)', width: '40px', color: 'secondGreen', fill: 'mainGreen', backgroundColor: 'secondGreen', borderRadius: '50%' })}
                initial={{ y: -40 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring', repeatType: 'reverse', repeat: Infinity }}
            >
                <ArrowComponent className={css({ transform: 'rotate(90deg)' })} />
            </motion.div>
        </div>
    )
}