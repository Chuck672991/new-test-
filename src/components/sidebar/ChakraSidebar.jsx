import {
  Avatar,
  Heading,
  Image,
  Input,
  Stack,
  Wrap,
  WrapItem,
  Button,
  ButtonGroup,
  Divider,
  Text,
  Flex,
  VStack,
  StackDivider,
  HStack,
} from "@chakra-ui/react";
import { RiDoubleQuotesR } from "react-icons/ri";
import React from "react";
import { RiArrowDropDownLine, RiDashboard2Line, RiThreadsLine } from "react-icons/ri";

const ChakraSidebar = () => {
  return (
    <section id="section">
      <div  style={{ position: "relative" }} id="side-stack">
        <div id="side-bar">
          <Wrap>
            <WrapItem gap={5}>
              <Avatar size={"lg"} src="" alt="" />
              <Heading mt={2}>Haider Ali</Heading>
            </WrapItem>
          </Wrap>
          <Input mt={3} size={"md"} placeholder="Search Anything" />
          <VStack
          alignItems={"flex-start"}
          
            p="6"
            rounded="md"
            bg="transparent"
            boxShadow="dark-lg"
            mt={4}
            spacing={1}
          >
            <Stack id="side-top"
            >
              <Wrap>
                <WrapItem>
                  <Button
                    leftIcon={<RiDashboard2Line size={"30px"} />}
                    size={"md"}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    Dashboard
                  </Button>
                </WrapItem>
              </Wrap>
              <Wrap mt={2}>
                <WrapItem>
                  <Button
                    rightIcon={<RiArrowDropDownLine size={"30px"} />}
                    leftIcon={<RiDashboard2Line size={"30px"} />}
                    size={"md"}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    Dashboard
                  </Button>
                </WrapItem>
              </Wrap>
              <Wrap mt={2}>
                <WrapItem>
                  <Button gap={3} colorScheme="none">
                    <RiDashboard2Line size={"30px"} />
                    Dashboard
                  </Button>
                </WrapItem>
              </Wrap>
            </Stack>
            <Divider marginTop={4}   borderColor='gray.200' />

            <Stack id="side-bottom" >

              <Wrap>
                <WrapItem>
                  <Button
                    leftIcon={<RiDashboard2Line size={"30px"} />}
                    size={"md"}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    Dashboard
                  </Button>
                </WrapItem>
              </Wrap>
              <Wrap mt={2}>
                <WrapItem>
                  <Button
                    rightIcon={<RiArrowDropDownLine size={"30px"} />}
                    leftIcon={<RiDashboard2Line size={"30px"} />}
                    size={"md"}
                    colorScheme="teal"
                    variant="ghost"
                  >
                    Dashboard
                  </Button>
                </WrapItem>
              </Wrap>
            <Divider margin={2} />

              <Stack>

            <Flex justifyContent={"space-between"} >
                <Flex gap={2}>
                <Avatar size={"md"} src="" alt="" />
              <Flex marginTop={1} flexDirection={"column"}>
              <Text fontWeight={600} fontSize={"xs"} >Haider Ali</Text>
              <Text fontWeight={600} fontSize={"xs"} >haiderali921195@gmail.com</Text>
              </Flex>
                </Flex>
             
              < RiDoubleQuotesR />


            </Flex>
          </Stack>
            </Stack>
          </VStack>
        </div>
      </div>
    </section>
  );
};

export default ChakraSidebar;
