import {
  Container,
  Heading,
  SimpleGrid,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { OthersGridItem } from "../components/grid-item";
import Layout from "../components/layout/article";
import Section from "../components/Section";
import thumbBarDolce from "../public/images/others/thumbBarDolce.webp";
import thumbCanoaCoffee from "../public/images/others/thumbCanoaCoffee.webp";

const Others = () => {
  return (
    <Layout title="Others">
      <Container>
        <Heading as="h3" variant="section-title" fontSize={24} mb={6}>
          Others
        </Heading>
        <Heading as="p" fontSize={18}>
          Web制作以外の活動内容
        </Heading>

        <SimpleGrid columns={[1]} gap={6} mt={6}>
          <Section delay={0.2}>
            <OthersGridItem
              path="https://futsukaichi-dolce.localinfo.jp/"
              title="BAR ドルチェ"
              thumbnail={thumbBarDolce}
            >
              カクテルショットバー
              <br />
              創業32年のオーセンティックショットバー。
              <Link
                href="https://goo.gl/maps/3RxCzYWz1EHvktyG6"
                target="_blank"
                display="flex"
                alignItems="center"
                my={1}
              >
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14px"
                  height="14px"
                  viewBox="0 0 930.000000 1280.000000"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g
                    transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)"
                    fill={useColorModeValue("#319795", "#88ccca")}
                    stroke="none"
                  >
                    <path
                      d="M4335 12789 c-1496 -104 -2843 -915 -3635 -2190 -232 -373 -414 -787
-529 -1204 -305 -1107 -197 -2278 305 -3295 191 -387 372 -660 676 -1020 34
-41 753 -976 1596 -2077 918 -1199 1555 -2022 1588 -2052 186 -170 442 -170
628 0 33 30 670 853 1588 2052 843 1101 1562 2036 1596 2077 304 360 485 633
676 1020 566 1147 629 2502 174 3695 -353 923 -967 1689 -1798 2242 -825 549
-1864 821 -2865 752z m559 -2254 c224 -29 398 -81 601 -180 553 -268 931 -756
1062 -1374 25 -116 27 -145 28 -366 0 -267 -10 -345 -70 -555 -161 -561 -586
-1032 -1130 -1253 -201 -82 -365 -120 -592 -139 -294 -25 -593 23 -878 139
-544 221 -969 692 -1130 1253 -60 210 -70 288 -70 555 1 221 3 250 28 366 112
527 406 965 842 1252 177 116 437 227 637 271 209 46 467 58 672 31z"
                    />
                  </g>
                </svg>
                福岡県筑紫野市
              </Link>
            </OthersGridItem>
          </Section>

          <Section delay={0.2}>
            <OthersGridItem
              path="https://canoa-coffee.xyz/"
              title="Canoa coffee"
              thumbnail={thumbCanoaCoffee}
            >
              自家焙煎珈琲豆販売
              <br />
              自家焙煎の珈琲豆の販売をネットを始め、BARドルチェ等で販売。
            </OthersGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

export default Others;
