import { css } from '../../styled-system/css';
import { useState } from 'react';
import Image from 'next/image';
import mainImage from '/public/images/home.jpg'
import Link from 'next/link'
import homeData from '../tools/homeData.json'
import { motion } from 'framer-motion';

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

  return (
    <div className={css({ font: 'arial', flexDirection: 'column', alignItems: 'center', color: 'mainWhite', fontSize: "2xl", fontWeight: 'bold', backgroundColor: '#1f1e23', width: '100%', display: 'flex', justifyContent: 'space-around' })}>
      <div className={css({ scrollSnapAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })}>
        <Image src={mainImage} alt='Image de couverture de loup noir' className={css({})} onClick={() => playAudio('/audio/.mp3')} />
      </div>
      {homeData?.map((element, index) => (
        <div
          className={css({ scrollSnapAlign: 'center', color: `${index % 2 === 0 && 'mainBlack'}`, backgroundColor: `${index % 2 === 0 && 'mainWhite'}`, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', })}
          onClick={() => playAudio(`/audio/titles/title_${element.foreignLanguage}.wav`)}
          key={index}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={css({ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' })}
          >
            {element.title}
          </motion.p>
        </div>
      ))
      }
      <Link href='/1' className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'secondGreen', fontSize: 'md', padding: '3', backgroundColor: 'mainGreen', width: '200px', border: '1px solid token(colors.mainGreen)', position: 'fixed', top: 'calc(100% - 100px)', zIndex: '10', borderRadius: '5px' })}>
        <button onClick={() => stopAudio()}>Demarrer l&apos;histoire</button>
      </Link>
    </div>
  )
}