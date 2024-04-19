import Layout from '@/components/Layout/Layout';
import Footer from '@/components/Footer/Footer';
import data from '@/tools/data.json'


export async function getStaticPaths() {
  const paths = data.map((element: any) => ({
    params: { id: element.page },
  }))

  // { fallback: false } means other routes should 404
  return { paths, fallback: false }
}
export async function getStaticProps(params: any) {
  return {
    props: {
      data: data[params.params.id - 1]
    },
  }
}

export default function Page(data: any) {
  data = data.data
  return (
    <>
      <Layout
        key={data.page}
        id={data.page}
        imgUrl={`/images/${data.image}`}
        alt={data.alt}
        text={data.text}
      />
      <Footer
        foreignLanguage={data.foreignLanguage}
        iso={data.flag}
        frenchAudio={data.page}
      />
    </>
  )
}