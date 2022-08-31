import { extendTheme, useColorModeValue } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      bg: useColorModeValue("#f0e7db", "#202023"),
    },
  }),
};

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: useColorModeValue("#202023", "#fff"),
      textUnderlineOffset: 3,
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  glassTeal: "#88ccca",
  text: "#000",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  components,
  colors,
  styles,
  fonts,
});

export default theme;
