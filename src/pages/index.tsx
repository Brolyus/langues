import { css } from '../../styled-system/css';
import { useState } from 'react';
import Image from 'next/image';
import mainImage from '/public/images/home.jpg'
import Link from 'next/link'
import homeData from '@/tools/homeData.json'
import { motion, useScroll } from 'framer-motion';
import useScrollPosition from '@/tools/hooks/useScrollPosition';
import ArrowComponent from '@/components/Arrow/Arrow';
import SoundComponent from '@/components/SoundComponent/SoundComponent';

export default function Home() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const scrollPosition = useScrollPosition()
  const { scrollYProgress } = useScroll();

  console.log(scrollPosition)
  console.log(scrollYProgress)

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
          className={css({ scrollSnapAlign: 'center', color: `${index % 2 === 0 && 'mainBlack'}`, backgroundColor: `${index % 2 === 0 && 'mainWhite'}`, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', flexDirection: 'column' })}
          onClick={() => playAudio(`/audio/titles/title_${element.foreignLanguage}.wav`)}
          key={index + 'title'}
        >
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className={css({ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center' })}
          >
            {element.title}
          </motion.p>
          <motion.span
            className={css({ marginTop: '10px', fill: 'mainWhite', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' })}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <SoundComponent />
          </motion.span>
        </div>
      ))
      }
      <motion.div
        className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'secondGreen', fontSize: 'md', padding: '3', backgroundColor: 'mainGreen', width: '200px', border: '1px solid token(colors.mainGreen)', position: 'fixed', top: 'calc(100% - 100px)', zIndex: '10', borderRadius: '5px' })}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Link href='/1' onClick={() => stopAudio()}>
          <button>Demarrer l&apos;histoire</button>
        </Link>
      </motion.div>
      <motion.div
        className={css({ position: 'fixed', right: '20px', top: 'calc(100% - 96px)', width: '40px', color: 'secondGreen', fill: 'mainGreen', backgroundColor: 'secondGreen', borderRadius: '50%' })}
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', repeat: 2 }}
      >
        <ArrowComponent className={css({ transform: 'rotate(90deg)' })} />
      </motion.div>
    </div>
  )
}