import { css } from '../../../styled-system/css';
import Arrow from '../Arrow/Arrow'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Footer: React.FC = () => {
    const pathname = usePathname()


    const currentPageNumber = pathname === '/' ? 0 : parseInt(pathname.replace('/', ''), 10)
    let nextPageNumber
    switch (currentPageNumber) {
        case 0:
            nextPageNumber = '/1';
            break;
        case 6:
            nextPageNumber = '/';
            break;
        default:
            nextPageNumber = '/' + (currentPageNumber + 1);
    }

    let prevPageNumber
    switch (currentPageNumber) {
        case 0:
            prevPageNumber = '/6';
            break;
        case 1:
            prevPageNumber = '/';
            break;
        default:
            prevPageNumber = '/' + (currentPageNumber - 1);
    }






    return (
        <footer className={css({ backgroundColor: "mainBlue", height: "60px", display: "flex", justifyContent: "space-around", color: "mainYellow", borderTop: "1px solid token(colors.mainYellow)", alignItems: "center" })}>
            <Link href={prevPageNumber}>
                <Arrow className={css({ color: "mainYellow !important", fill: 'mainYellow', transform: 'scaleX(-1)' })} />
            </Link>
            <button className={css({ fontSize: '2xl' })}>&#127467;&#127479;</button>
            <button className={css({ fontSize: '2xl' })}>&#127477;&#127481;</button>
            <Link href={nextPageNumber}>
                <Arrow className={css({ color: "mainYellow !important", fill: 'mainYellow' })} />
            </Link>
        </footer>
    )
}

export default Footer;