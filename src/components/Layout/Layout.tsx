import { css } from '../../../styled-system/css';
import Image from 'next/image';

interface LayoutProps {
    titleText: string;
    imgUrl: string;
    alt: string;
    text: Array<string>;
}

const Layout: React.FC<LayoutProps> = ({ titleText, imgUrl, alt, text }) => {
    return (
        <>
            <section className={css({ fontFamily: "Strawford", height: "calc(100% - 60px)", color: "black", display: "flex", alignItems: "center", padding: "5", justifyContent: "space-around", flexDirection: "column", borderRadius: "5px" })}>
                {/* <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🦦!</h1> */}
                <h1 className={css({ fontSize: "2xl", fontWeight: "bold", width: "100%", backgroundColor: "#f4f4f4", textAlign: "center", borderRadius: "5" })}>{titleText}</h1>
                <Image src={imgUrl} width={100} height={100} alt={alt} />
                {/* <Image src="/images/page1.jpg" width={1} height={100} alt="Illustration du paragraphe" className={css({})} /> */}
                {text.map(element => {
                    return <p className={css({ backgroundColor: "#f4f4f4", padding: "5", borderRadius: "5" })}>{element}</p>
                })}
            </section >
        </>
    )
}

export default Layout;