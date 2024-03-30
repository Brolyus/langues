import { css } from '../../styled-system/css';
import { useState } from 'react';

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
    <div className={css({ color:'white', fontSize: "md", fontWeight: 'bold', background: 'url(https://langues.brolyus.com/_ipx/w_640,q_75/%2Fimages%2Fpage1.jpg?url=%2Fimages%2Fpage1.jpg&w=640&q=75) center no-repeat' ,backgroundColor: 'black', width: '100%', height: "calc(100% - 60px)", display: 'flex', flexDirection: 'column', justifyContent: 'space-around' })}>
      <section className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center'})}>
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
    </div>
  )
}