import {
  Container,
  Box,
  Heading,
  Button,
  Badge,
  HStack,
} from "@chakra-ui/react"
import { ChevronRightIcon } from "@chakra-ui/icons"
import Layout from "..//components/layout/article"
import NextLink from "next/link"
import Section from "../components/Section"
import MemberItem from "../components/MemberGrid"

export default function Home() {
  return (
    <Layout title='Home'>
      <Container>
        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Service
          </Heading>

          <p>
            福岡を拠点に活動するフリーランスのデザイナーやWebエンジニアによるクリエイター事務所です。
            Web制作全般、デザイン、コーディング代行など、貴社のさまざまな問題解決に尽力します。
          </p>
          <HStack mt={2}>
            <Badge p={1} fontSize='14px'>
              Planning
            </Badge>
            <Badge p={1} fontSize='14px'>
              Design
            </Badge>
            <Badge p={1} fontSize='14px'>
              Coding
            </Badge>
          </HStack>
          <Box align='center' my={4}>
            <NextLink href='/works'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                Works
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.4}>
          <Heading as='h3' variant='section-title'>
            Member
          </Heading>

          <MemberItem
            image='/images/auth/AkiNishiguchi.webp'
            nameTitle='Aki Nishiguchi'
            url='https://aki-nishiguchi.com/'
          >
            Web Engineer
          </MemberItem>

          <MemberItem image='/images/auth/Shiho.webp' nameTitle='Shiho Tahara'>
            Designer
          </MemberItem>

          <MemberItem image='/images/auth/Keita.webp' nameTitle='Keita Kuroki'>
            Designer
          </MemberItem>

          <MemberItem
            image='/images/auth/Shuma.webp'
            nameTitle='Matsumoto Shuma'
          >
            CMO
          </MemberItem>
          <Box align='center' my={4}>
            <NextLink href='/message'>
              <Button rightIcon={<ChevronRightIcon />} colorScheme='teal'>
                Message
              </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
