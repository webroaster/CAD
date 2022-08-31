import { Container, Box, Heading, Button } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "..//components/layout/article";
import NextLink from "next/link";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import MemberItem from "../components/MemberGrid";

export default function Home() {
  return (
    <Layout title="Home">
      <Container>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Service
          </Heading>
          <Paragraph>
            福岡を拠点に活動するフリーランスのデザイナーやWebエンジニアによるクリエイター事務所です。
            Web制作全般、デザイン、コーディング代行など、貴社のさまざまな問題解決に尽力します。
            <br />
            Planning / Design / Coding
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Member
          </Heading>

          <MemberItem
            image="/images/auth/AkiNishiguchi.webp"
            nameTitle="Aki Nishiguchi"
            url="https://aki-nishiguchi.com/"
          >
            Web Engineer
          </MemberItem>
          <Box align="center" my={4}>
            <NextLink href="/massage">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                Massage
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  );
}
