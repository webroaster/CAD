import NextLink from "next/link";
import {
  Heading,
  Box,
  Image,
  Link,
  Badge,
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Layout from "./layout/article";
import Head from "next/head";

const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link>Works</Link>
    </NextLink>
    <span>
      &nbsp;
      <ChevronRightIcon />
      &nbsp;
    </span>
    <Heading display="inline-block" as="h2" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

const WorkImage = ({ src, alt }) => (
  <Image
    borderRadius="lg"
    w="full"
    src={src}
    alt={alt}
    mb={4}
    placeholder="blur"
  />
);

const Meta = ({ children }) => (
  <Badge colorScheme="teal" mr={2}>
    {children}
  </Badge>
);

export const WorkItem = ({
  children,
  title,
  badge,
  category,
  url,
  stacks,
  img1,
  img2,
  alt,
  period,
}) => (
  <Layout>
    <Head>
      <title>{title} | CAD</title>
    </Head>
    <Container>
      <Title>
        {title} <Badge>{badge}</Badge>
      </Title>
      <Heading as="h3" fontSize={18} mb={2}>
        {category}
      </Heading>
      <p>{children}</p>
      <List my={4}>
        {url ? (
          <ListItem>
            <Meta>Website</Meta>
            <Link href={url} target="_blank">
              {url} <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        ) : undefined}
        <ListItem>
          <Meta>Stack</Meta>
          <span>{stacks}</span>
        </ListItem>
        <ListItem>
          <Meta>Period</Meta>
          <span>{period}</span>
        </ListItem>
      </List>

      <WorkImage src={img1} alt={alt} />
      <WorkImage src={img2} alt={alt} />
    </Container>
  </Layout>
);
