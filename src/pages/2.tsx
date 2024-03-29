import Layout from '@/components/Layout/Layout';
export default function Page2() {
    return (
        <Layout
            titleText={'Hello page 2 🦦!'}
            imgUrl={'/images/page2.jpg'}
            alt={'Illustration du paragraphe'}
            text={['Alex va dans la forêt. C’est le soir parce qu’il fait tout noir.', 'Ça fait peur d’aller dans la forêt parce qu’il y a le loup, le serpent, le bruit des arbres.']}
        />
    )
}