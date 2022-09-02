import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../components/layout/Main";
import Fonts from "../components/Fonts";
import theme from "../lib/theme";
import { AnimatePresence } from "framer-motion";
import GoogleAnalytics from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <GoogleAnalytics />
      <ChakraProvider theme={theme}>
        <Fonts />
        <Layout router={router}>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
