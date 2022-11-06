import Head from "next/head"
import {
  Box,
  Container,
  Heading,
  Image,
  useColorModeValue,
} from "@chakra-ui/react"
import Navbar from "../Navbar"
import Layout from "./article"
import Section from "../Section"

const Main = ({ children, router }) => {
  return (
    <Layout>
      <Box as='main' pb={8}>
        <Head>
          <meta
            name='description'
            content='CADolceのサイトです。私たちは信頼できるクリエイターが集まりWebサイトやデザイン、ロゴなどを作成いたします。'
          />
          <meta property='og:url' content='https://www.cadolce.com/' />
          <meta property='og:title' content='CAD | Web/Design' />
          <meta property='og:site_name' content='CAD | Web/Design' />
          <meta
            property='og:description'
            content='CADolceのサイトです。私たちは信頼できるクリエイターが集まりWebサイトやデザイン、ロゴなどを作成いたします。'
          />
          <meta property='og:type' content='website' />
          <meta
            property='og:image'
            content='https://www.cadolce.com/logo-black.png'
          />
          <link rel='canonical' href='https://www.cadolce.com/' />

          <meta name='twitter:card' content='summary_large_image' />
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW='container.mg' pt={14}>
          <Container>
            <Box flex={{ md: "flex" }} py={4}>
              <Box flexGrow={1}>
                <Heading as='h2' variant='page-title' size='lg' mb={1}>
                  CAD - Web/Design
                </Heading>
                <p>クリエイターエージェンシードルチェ</p>
              </Box>
              {/* プロフィール画像セクション */}
              <Box
                flexShrink={0}
                my={6}
                align='center'
                h='256px'
                overflow='hidden'
              >
                <Image
                  width='100%'
                  height='100%'
                  objectFit='cover'
                  src='/fv.webp'
                  alt='MV'
                />
              </Box>
            </Box>
          </Container>
          {children}
          <Section>
            <Box
              bg={useColorModeValue("rgba(0,0,0,0.1)", "#ededed")}
              borderRadius='10px'
              p={"1em 5em"}
              my={"3em"}
              mx={"auto"}
              width={"fit-content"}
            >
              <Image src='/logo-yokonaga.png' width={300} height={{base: '30px', md: '49px'}} alt />
            </Box>
          </Section>
        </Container>
      </Box>
    </Layout>
  )
}

export default Main
