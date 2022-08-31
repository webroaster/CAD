import { Container, Heading, Box, Text, Button } from "@chakra-ui/react";
import NextLink from "next/link";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Head from "next/head";
import Layout from "../components/layout/article";
import Section from "../components/Section";

const Message = () => {
  return (
    <Layout>
      <Container>
        <Head>
          <title>Message | CAD</title>
        </Head>
        <Heading as="h2" mb={2} variant="page-title" size="lg">
          Message - チーム挨拶
        </Heading>
        <Text mb={6}>
          <span display="inline-block">当サイトをご覧いただき</span>
          <span display="inline-block">誠にありがとうございます。</span>
        </Text>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Hello
          </Heading>
          <p>
            CADは福岡を拠点に活動するフリーランスのデザイナーやWebエンジニアによるクリエイター事務所です。
            <br />
            <br />
            私たちはそれぞれの「得意分野」を共有してモノ作りを行う事で、効率よく高クオリティな価値を生み出せると考えています。
            <br />
            メンバーそれぞれの「得意分野」が合わさることで、1人では出せない力を発揮し、貴社の問題解決に尽力します。
            <br />
            <br />
            Web制作全般、デザイン、コーディング代行などを行い、貴社にとって大切なビジネスパートナーとなれるよう今後も最善を尽くして参ります。
          </p>

          <Box align="center" my={6}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Works
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
};

export default Message;
