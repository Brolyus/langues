import { css } from '../../../styled-system/css';
import Image from 'next/image';
import { motion, AnimatePresence, stagger, LayoutGroup } from 'framer-motion';


interface LayoutProps {
    imgUrl: string;
    imgUrl2?: string;
    alt: string;
    text: Array<string>;
    id: string;
}

const Layout: React.FC<LayoutProps> = ({ id, imgUrl, alt, text, imgUrl2 }) => {
    return (
        <AnimatePresence mode='popLayout'>
            <motion.section
                key={id + 'section'}
                layout
                layoutId='layout'
                className={css({ zIndex: 0, fontFamily: "Arial", height: "calc(100% - 60px)", display: "flex", alignItems: "center", padding: "5", flexDirection: "column", backgroundColor: 'white', position: 'relative', overflow: 'auto', lg: { maxWidth: '860px', margin: 'auto' } })}
                initial={{ opacity: 0.5, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", duration: 0.8 }}
                exit={{ opacity: 0.5, y: 40 }}
            >
                <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={css({ marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px' })}>
                    <Image src={imgUrl} width={300} height={300} alt={alt} />
                </motion.div>
                {
                    imgUrl2 &&
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className={css({ marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px' })}>
                        <Image src={imgUrl2} width={300} height={300} alt={alt} />
                    </motion.div>
                }
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    className={css({ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px', marginTop: '20px' })}
                >

                    {text.map((element, i) => {
                        return <motion.p
                            className={css({ padding: "5", borderRadius: "5", width: '100%' })}
                            key={i + 'text'}>{element}</motion.p>
                    })}
                </motion.div>
            </motion.section >
        </AnimatePresence>
    )
}

export default Layout;