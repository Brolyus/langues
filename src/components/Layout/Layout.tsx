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
                className={css({ zIndex: 0, fontFamily: "Arial", height: "calc(100% - 60px)", display: "flex", alignItems: "center", padding: "5", flexDirection: "column", backgroundColor: '#DEE2E6', position: 'relative', overflow: 'auto', lg: { maxWidth: '860px', margin: 'auto' } })}
            >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0.5, x: -40 }}
                    animate={{ scale: 1, opacity: 1, x: 0 }}
                    exit={{ opacity: 0.5, x: 40, scale: 0.8 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className={css({ marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px' })}>
                    <Image src={imgUrl} width={300} priority height={300} alt={alt} />
                </motion.div>
                {
                    imgUrl2 &&
                    <motion.div
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.8, type: 'spring' }}
                        className={css({ marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px' })}>
                        <Image src={imgUrl2} width={300} height={300} alt={alt} priority />
                    </motion.div>
                }
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 40, opacity: 0 }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className={css({ boxShadow: 'rgba(0, 0, 0, 0.15) 0px 2px 8px', marginTop: '20px', backgroundColor: 'white' })}
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