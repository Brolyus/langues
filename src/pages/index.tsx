import { css } from '../../styled-system/css';
import { useState } from 'react';
import Image from 'next/image';
import mainImage from '/public/images/home.jpg'

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

  return (
<<<<<<< HEAD
    <div className={css({ flexDirection: 'column', alignItems: 'center', color: 'mainWhite', fontSize: "2xl", fontWeight: 'bold', backgroundColor: '#1f1e23', width: '100%', display: 'flex', justifyContent: 'space-around' })}>
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
=======
    <div className={css({ color:'white', fontSize: "md", fontWeight: 'bold', background: 'url(https://langues.brolyus.com/_ipx/w_640,q_75/%2Fimages%2Fpage1.jpg?url=%2Fimages%2Fpage1.jpg&w=640&q=75) center no-repeat' ,backgroundColor: 'black', width: '100%', height: "calc(100% - 60px)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' })}>
      <section className={css({ display: 'flex', justifyContent: 'space-around', alignItems: 'center'})}>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Loup noir</p>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Black wolf</p>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Lobo nero</p>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Lobo negro</p>
      </section>
      <section className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center'})}>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Loup noir</p>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Black wolf</p>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Lobo nero</p>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Lobo negro</p>
      </section>
      <section className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center'})}>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Loup noir</p>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Black wolf</p>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Lobo nero</p>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Lobo negro</p>
      </section>
      <section className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center'})}>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Loup noir</p>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Black wolf</p>
        <p onClick={() => playAudio('/audio/ca.mp3')}>Lobo nero</p>
        <p onClick={() => playAudio('/audio/fr.mp3')}>Lobo negro</p>
      </section>
>>>>>>> 26dd274 (wip)
    </div>
  )
}