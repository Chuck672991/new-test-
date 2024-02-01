import React from "react";
import { RiBasketballFill, RiSafariFill } from "react-icons/ri";
import {
  Stack,
  MenuItem,
  Button,
  Text,
  Wrap,
  WrapItem,
  Heading,
  Flex,
} from "@chakra-ui/react";

const ChakraNav = () => {
  return (
    <nav>
      <Flex p={3} justify={"space-between"}>
        <Wrap alignItems={"center"} >
          <WrapItem gap={7}>
            {/* icon  */}
            <RiSafariFill fontSize={30}/>
            {/* Hassana */}
            <Text fontSize={"large"}>Hassana</Text>
          </WrapItem>
        </Wrap>

        <Wrap alignItems={"center"} >
          <WrapItem  gap={5}>
            {/* icon  */}
            <RiSafariFill fontSize={30} />
            <RiSafariFill fontSize={30}/>
            {/* Hassana */}
          </WrapItem>
        </Wrap>
        {/* icon  */}
        {/* icon  */}
      </Flex>
    </nav>
  );
};

export default ChakraNav;
