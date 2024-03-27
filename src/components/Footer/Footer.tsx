import { css } from '../../../styled-system/css';

const Footer: React.FC = () => {
    return (
        <footer className={css({ backgroundColor: "#e8e8e8", height: "60px", display: "flex", justifyContent: "space-around", color: "white", borderRadius: "5px" })}>
            <button>&#x1F1FA;&#x1F1F8;</button>
            <button>&#127467;&#127479;</button>
            <button>c</button>
            <button>d</button>
        </footer>
    )
}

export default Footer;