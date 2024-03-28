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
            <section className={css({ fontFamily: "Strawford", height: "calc(100% - 60px)", color: "primary", display: "flex", alignItems: "center", padding: "5", justifyContent: "space-around", flexDirection: "column", backgroundColor: 'mainBlue' })}>
                {/* <h1 className={css({ fontSize: "2xl", fontWeight: "bold" })}>Hello 🦦!</h1> */}
                {/* <h1 className={css({ fontSize: "2xl", fontWeight: "bold", width: "100%", backgroundColor: "secondary", textAlign: "center", borderRadius: "5", boxShadow: "card" })}>{titleText}</h1> */}
                <Image src={imgUrl} width={200} height={200} alt={alt} />
                {/* <Image src="/images/page1.jpg" width={1} height={100} alt="Illustration du paragraphe" className={css({})} /> */}
                {text.map((element, id) => {
                    return <p className={css({ backgroundColor: "mainBlue", padding: "5", borderRadius: "5", width: '100%' })} key={id}>{element}</p>
                })}
            </section >
        </>
    )
}

export default Layout;