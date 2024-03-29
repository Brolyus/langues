import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({ color:'white', fontSize: "2xl", fontWeight: 'bold', background: 'url(https://langues.brolyus.com/_ipx/w_640,q_75/%2Fimages%2Fpage1.jpg?url=%2Fimages%2Fpage1.jpg&w=640&q=75) center no-repeat' ,backgroundColor: 'black', width: '100%', height: "calc(100% - 60px)", display: 'flex', justifyContent: 'space-around' })}>
      <p>Loup noir</p>
      <p>Black wolf</p>
      <p>Lobo nero</p>
      <p>Lobo negro</p>
    </div>
  )
}