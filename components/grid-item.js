import NextLink from "next/link";
import Image from "next/image";
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Global } from "@emotion/react";

export const GridItem = ({ children, href, title }) => (
  <Box w="100%" align="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

export const WorkGridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" align="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Box className="grid-item-wrap">
          <Image
            src={thumbnail}
            alt={title}
            className="grid-item-thumbnail"
            placeholder="blur"
          />
        </Box>
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export const OthersGridItem = ({ children, path, title, thumbnail }) => (
  <Box w="100%" mb={4}>
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
    />
    <Text mt={2} fontSize={20}>
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
    <Link
      href={path}
      target="_blank"
      color={useColorModeValue("#319795", "#88ccca")}
    >
      {path}
      <ExternalLinkIcon ml={1} />
    </Link>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-wrap {
        aspect-ratio: 32 / 17;

        * {
          height: 100% !important;
        }
        img {
          object-fit: cover;
        }
      }
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
