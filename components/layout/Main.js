import Head from "next/head";
import { Box, Container, Heading, Image } from "@chakra-ui/react";
import Navbar from "../Navbar";
import Layout from "./article";

const Main = ({ children, router }) => {
  return (
    <Layout>
      <Box as="main" pb={8}>
        <Head>
          <meta
            name="description"
            content="CADolceのサイトです。私たちは信頼できるクリエイターが集まりWebサイトやデザイン、ロゴなどを作成いたします。"
          />
        </Head>

        <Navbar path={router.asPath} />

        <Container maxW="container.mg" pt={14}>
          <Container>
            <Box flex={{ md: "flex" }} py={4}>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title" size="lg" mb={1}>
                  CAD - Web/Design
                </Heading>
                <p>クリエイターエージェンシードルチェ</p>
              </Box>
              {/* プロフィール画像セクション */}
              <Box
                flexShrink={0}
                my={6}
                align="center"
                h="256px"
                overflow="hidden"
              >
                <Image
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  src="/images/others/thumbBarDolce.webp"
                  alt="MV"
                />
              </Box>
            </Box>
          </Container>
          {children}
        </Container>
      </Box>
    </Layout>
  );
};

export default Main;
