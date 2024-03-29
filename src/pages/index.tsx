import { css } from '../../styled-system/css';

export default function Home() {
  return (
    <div className={css({ fontSize: "8xl", fontWeight: 'bold', backgroundColor: 'green', width: '100%', height: "calc(100% - 60px)" })}>Hello 🐼!</div>
  )
}