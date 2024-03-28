import { css } from '../../../styled-system/css';
import Image from 'next/image';
import Arrow from '../Arrow/Arrow'

const Footer: React.FC = () => {
    return (
        <footer className={css({ backgroundColor: "mainBlue", height: "60px", display: "flex", justifyContent: "space-around", color: "mainYellow", borderTop: "1px solid token(colors.mainYellow)" })}>
            <Arrow className={css({ color: "mainYellow !important", fill: 'mainYellow', transform: 'scaleX(-1)' })} />
            <button className={css({ fontSize: '2xl' })} >&#127467;&#127479;</button>
            <button className={css({ fontSize: '2xl' })}>&#127477;&#127481;</button>
            <Arrow className={css({ color: "mainYellow !important", fill: 'mainYellow' })} />
        </footer>
    )
}

export default Footer;