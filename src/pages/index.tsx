import { css } from '../../styled-system/css';
import { useState } from 'react';
import Image from 'next/image';
import mainImage from '/public/images/home.jpg'
import Link from 'next/link'

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
      <div className={css({ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })}>
        <Image src={mainImage} alt='Image de couverture de loup noir' className={css({})} onClick={() => playAudio('/audio/fr.mp3')} />
      </div>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>Loup noir</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', })} onClick={() => playAudio('/audio/ca.mp3')}>Wolf schwarz</p>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>Black wolf</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/ca.mp3')}>بئذ دوسأ</p>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>вълк черен</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/ca.mp3')}>llop negra</p>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>Lobu negru</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/ca.mp3')}>Lobo negro</p>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/ca.mp3')}>luppo nero</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>uccen avarkon</p>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/ca.mp3')}>wilk czarny</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>Lobo preto</p>
      <p className={css({ width: '100%', color: 'mainBlack', backgroundColor: 'mainWhite', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/ca.mp3')}>Lup negru</p>
      <p className={css({ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' })} onClick={() => playAudio('/audio/fr.mp3')}>varge svart</p>
      <Link href='/1' className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'secondGreen', fontSize: 'md', padding: '3', backgroundColor: 'mainGreen', width: '200px', border: '1px solid token(colors.mainGreen)', position: 'fixed', top: 'calc(100% - 100px)', zIndex: '10', borderRadius: '5px' })}>
        <button onClick={() => stopAudio()}>Demarrer l&apos;histoire</button>
      </Link>
    </div>
  )
}