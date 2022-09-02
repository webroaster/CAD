import {
  Container,
  Heading,
  SimpleGrid,
  Text,
  Badge,
  HStack,
} from "@chakra-ui/react";
import Section from "../components/Section";
import { WorkGridItem, GridItemStyle } from "../components/grid-item";

// 画像パスインポート
import thumbSgcreate1 from "../public/images/works/thumbSgcreate1.webp";
import thumbRyugaku from "../public/images/works/thumbRyugaku.webp";
import thumbPhilippines from "../public/images/works/thumbPhilippines.webp";
import thumbGamicome from "../public/images/works/thumbGamicome.webp";
import thumbDressMaker from "../public/images/works/thumbDressMaker.webp";
import thumbHibiki from "../public/images/works/hibiki_omote.webp";

import Layout from "../components/layout/article";

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" variant="section-title" fontSize={20} mb={6}>
          Works
        </Heading>
        <Text mb={6}>
          過去の実績一覧です。WordPressでの実務が多く、会員登録機能のあるサイトやここの他にSSGの構築やアプリケーションのフロントエンドにも携わらせていただいております。
          <br />
          紙媒体のデザインや印刷代行も可能で、名刺やフライヤー等のご相談も承っております。
        </Text>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <GridItemStyle />
          <Section>
            <WorkGridItem
              id="sgcreate1"
              title="SGクリエイト"
              thumbnail={thumbSgcreate1}
            >
              個人メディアサイト
              <br />
              <HStack
                colorScheme="teal"
                fontSize="12px"
                spacing={2}
                justify="center"
                mt={2}
              >
                <Badge>Planning</Badge>
                <Badge>Design</Badge>
                <Badge>Develop</Badge>
              </HStack>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="ryugaku-chiebukuro"
              title="留学知恵袋"
              thumbnail={thumbRyugaku}
            >
              メディアサイト
              <br />
              <HStack
                colorScheme="teal"
                fontSize="12px"
                spacing={2}
                justify="center"
                mt={2}
              >
                <Badge>Design</Badge>
                <Badge>Develop</Badge>
              </HStack>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="philippines"
              title="おうちでフィリピン留学"
              thumbnail={thumbPhilippines}
            >
              オンライン英会話教室運営サイト
              <br />
              <HStack
                colorScheme="teal"
                fontSize="12px"
                spacing={2}
                justify="center"
                mt={2}
              >
                <Badge>Design</Badge>
                <Badge>Develop</Badge>
              </HStack>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="gamicome"
              title="ゲミカム"
              thumbnail={thumbGamicome}
            >
              オンライン動画講座LP
              <br />
              <HStack
                colorScheme="teal"
                fontSize="12px"
                spacing={2}
                justify="center"
                mt={2}
              >
                <Badge>Design</Badge>
                <Badge>Develop</Badge>
              </HStack>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="dress-maker"
              title="DressMaker"
              thumbnail={thumbDressMaker}
            >
              人材募集サイト（求人サイト）
              <br />
              <HStack
                colorScheme="teal"
                fontSize="12px"
                spacing={2}
                justify="center"
                mt={2}
              >
                <Badge>Planning</Badge>
                <Badge>Design</Badge>
                <Badge>Develop</Badge>
              </HStack>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem id="hibiki" title="HIBIKI" thumbnail={thumbHibiki}>
              名刺作成
              <br />
              <HStack
                colorScheme="teal"
                fontSize="12px"
                spacing={2}
                justify="center"
                mt={2}
              >
                <Badge>Planning</Badge>
                <Badge>Design</Badge>
                <Badge>Print</Badge>
              </HStack>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Works;
