import { css } from '../../../styled-system/css';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface LayoutProps {
    titleText: string;
    imgUrl: string;
    alt: string;
    text: Array<string>;
}

const Layout: React.FC<LayoutProps> = ({ titleText, imgUrl, alt, text }) => {
    return (
        <motion.section
            className={css({ fontFamily: "Arial", height: "calc(100% - 60px)", color: "black", display: "flex", alignItems: "center", padding: "5", justifyContent: "space-around", flexDirection: "column", backgroundColor: 'white' })}
            animate={{ x: 0 }}
        >
            <Image src={imgUrl} width={200} height={200} alt={alt} />
            {text.map((element, id) => {
                return <p className={css({ backgroundColor: "white", padding: "5", borderRadius: "5", width: '100%' })} key={id}>{element}</p>
            })}
        </motion.section >
    )
}

export default Layout;