import { css } from '../../../styled-system/css';
import Image from 'next/image';
import { motion, AnimatePresence, stagger, LayoutGroup } from 'framer-motion';


interface LayoutProps {
    imgUrl: string;
    alt: string;
    text: Array<string>;
    id: string;
}

const Layout: React.FC<LayoutProps> = ({ id, imgUrl, alt, text }) => {
    return (
        <AnimatePresence mode='popLayout'>
            <motion.section
                key={id + 'section'}
                layout
                layoutId='layout'
                className={css({ zIndex: 0, fontFamily: "Arial", height: "calc(100% - 60px)", color: "black", display: "flex", alignItems: "center", padding: "5", flexDirection: "column", backgroundColor: 'white', position: 'relative', overflow: 'auto', lg: { maxWidth: '860px', margin: 'auto' } })}
                initial={{ opacity: 0.5, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                exit={{ opacity: 0.5, y: 40 }}
            >
                <motion.div initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className={css({ marginTop: '20px' })}>
                    <Image src={imgUrl} width={300} height={300} alt={alt} />
                </motion.div>
                {text.map((element, id) => {
                    return <motion.p className={css({ backgroundColor: "white", padding: "5", borderRadius: "5", width: '100%' })} key={id}>{element}</motion.p>
                })}
            </motion.section >
        </AnimatePresence>
    )
}

export default Layout;