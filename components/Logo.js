import Link from "next/link";
// import Image from "next/image";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { AtSignIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  &:hover img {
    transform: rotate(20deg);
  }
`;

const Logo = () => {
  // const LogoImg = srcをここに;

  return (
    <Link href="/">
      <a>
        <LogoBox>
          {/* <Image src={LogoImg} width={20} height={20} alt="Logo" /> */}
          <AtSignIcon />
          <Text
            color={useColorModeValue("gray.900", "whiteAlpha.900")}
            fontWeight="bold"
            ml={3}
            fontFamily="M PLUS Rounded 1c"
          >
            CAD
          </Text>
        </LogoBox>
      </a>
    </Link>
  );
};

export default Logo;
