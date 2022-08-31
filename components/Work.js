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
  useColorModeValue,
} from "@chakra-ui/react";
import { ChevronRightIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import Layout from "./layout/article";

const Title = ({ children }) => (
  <Box>
    <NextLink href="/works">
      <Link color={useColorModeValue("#319795", "#88ccca")}>Works</Link>
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
    <Container>
      <Title>
        {title} <Badge>{badge}</Badge>
      </Title>
      <Heading as="h3" fontSize={18} mb={2}>
        {category}
      </Heading>
      <p>{children}</p>
      <List my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link
            href={url}
            target="_blank"
            color={useColorModeValue("#319795", "#88ccca")}
          >
            {url} <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
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
