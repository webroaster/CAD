import { Box, Heading, Link, Image, useColorModeValue } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const MemberItem = ({ children, image, nameTitle, url }) => (
  <Box display="flex" alignItems="center" py={2}>
    <Box mr={6}>
      <Box
        overflow="hidden"
        borderWidth={2}
        borderColor="whiteAlpha.800"
        borderStyle="solid"
        maxW="100px"
        maxH="100px"
        borderRadius="full"
      >
        <Image src={image} alt="profileImage" />
      </Box>
    </Box>
    <Box>
      <Heading as="h2" variant="page-title" size="md">
        {nameTitle}
      </Heading>
      <p>{children}</p>
      <Link
        href={url}
        target="_blank"
        color={useColorModeValue("#319795", "#88ccca")}
      >
        {url} <ExternalLinkIcon ml={1} />
      </Link>
    </Box>
  </Box>
);

export default MemberItem;
