import NextLink from "next/link";
import {
  Container,
  Heading,
  Box,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";
import Layout from "../components/layout/article";

const NotFound = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h1">Not Found</Heading>
        <Text>アクセスしたページは存在しません</Text>
        <Divider my={6} />
        <Box my={6}>
          <NextLink href="/">
            <Button colorScheme="teal">homeに戻る</Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};
export default NotFound;
