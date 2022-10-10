import Link from "next/link"
import Image from "next/image"
import { Text, useColorModeValue } from "@chakra-ui/react"
import { AtSignIcon } from "@chakra-ui/icons"
import styled from "@emotion/styled"

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
`

const Logo = () => {
  const LogoImg = "/logo-3color.png"

  return (
    <Link href='/'>
      <a>
        <LogoBox>
          <Text
            color={useColorModeValue("gray.900", "whiteAlpha.900")}
            fontWeight='bold'
            ml={3}
            fontFamily='M PLUS Rounded 1c'
          >
            <Image src={LogoImg} width={45} height={25} alt />
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
