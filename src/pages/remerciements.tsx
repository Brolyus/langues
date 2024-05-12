import { useEffect } from 'react';
import { polyfillCountryFlagEmojis } from 'country-flag-emoji-polyfill';
import { css } from '../../styled-system/css';
import thanksData from '@/tools/authors.json'
import isoToEmoji from '@/tools/functions/isoToEmoji';
import Link from 'next/link';


export default function Thanks() {
    useEffect(() => {
        polyfillCountryFlagEmojis()
    }, [])
    return (
        <>
            <div className={css({ zIndex: 0, fontFamily: "Arial", height: "100%", display: "flex", alignItems: "center", padding: "5", flexDirection: "column", backgroundColor: '#DEE2E6', position: 'relative', overflow: 'auto', lg: { maxWidth: '860px', margin: 'auto', padding: '0 100px' } })}>
                <h2 className={css({ fontSize: '2xl', borderBottom: '1px solid black', marginBottom: '20px' })}>
                    Texte écrit, traduit et lu par les élèves de l&apos;UPE2A du collège Anne Frank:
                </h2>
                {thanksData?.map((element, index) => (
                    <section key={index} className={css({ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'flex-start', padding: '5px' })}>
                        <p className={css({ fontSize: 'xl' })}>{element.author}</p>
                        <span className={css({ margin: '0 5px' })}>-</span>
                        <span className={css({ fontFamily: 'Twemoji Country Flags', fontSize: '2xl' })}>
                            {isoToEmoji(element.flag)}
                        </span>
                        <span className={css({ margin: '0 5px' })}>-</span>
                        <p className={css({ fontSize: '2xl', textTransform: 'lowercase' })}>{element.language}</p>
                    </section>
                ))
                }
                <Link href='/'>
                    <button className={css({ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 'xl', backgroundColor: 'white', borderRadius: '5px', padding: '3', width: '200px', marginTop: '50px' })}>
                        Retour à l&apos;accueil
                    </button>
                </Link>
            </div >
        </>
    )
}