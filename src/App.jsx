import {
  Box,
  Container,
  Flex,
  VStack,
  Heading,
  Text,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input,
  CardBody,
  Divider,
  Button,
  ButtonGroup,
  CardFooter,
  Card,
  Image,
  Grid,
  GridItem,
  Stack,
} from "@chakra-ui/react";

import "./App.css";
import Main from "./components/main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import ChakraSidebar from "./components/sidebar/ChakraSidebar";
import ChakraNav from "./components/sidebar/ChakraNav";
function App() {
  return (
    <>
        {/* <Flex justify={"center"} height={"100vh"} bg={"red"} gap={20} p={10}  h={"full"}>
          
        <VStack p={2} alignItems={"flex-start"} bg={"pink"}  spacing={10} >
          <VStack alignItems={"flex-start"}  spacing={2} >
            <Heading>helo</Heading>
            <Text>Heloo i am Vstakc yeeee</Text>
            
          </VStack>
          <SimpleGrid  columns={2} columnGap={2}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>UserName</FormLabel>
                  <Input placeholder="Enter Something"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Enter Something"></Input>
                </FormControl>
              </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={2} >
             
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Enter Something"></Input>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack><VStack p={2} alignItems={"flex-start"} bg={"pink"}  spacing={10} >
          <VStack alignItems={"flex-start"}  spacing={2} >
            <Heading>helo</Heading>
            <Text>Heloo i am Vstakc yeeee</Text>
            
          </VStack>
          <SimpleGrid  columns={2} columnGap={2}>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>UserName</FormLabel>
                  <Input placeholder="Enter Something"></Input>
                </FormControl>
              </GridItem>
              <GridItem colSpan={1}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Enter Something"></Input>
                </FormControl>
              </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={2} >
             
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="Enter Something"></Input>
                </FormControl>
              </GridItem>
            </SimpleGrid>
          </VStack>
       
          <VStack bg={"lightblue"}>
            <Heading>helo</Heading>
            <Text>Heloo i am Vstakc blue yeeee</Text>
            <VStack>
            <Card maxW='sm'>
  <CardBody>
    <VStack>
      <SimpleGrid columns={2}>
        <Flex>
        <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='full'
      height={"100px"}
      width={"100px"}

    />
    <Text>
      HEllooo bero
    </Text>
     </Flex>
    
      </SimpleGrid>
    </VStack>
   
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Living room Sofa</Heading>
      <Text>
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody> 
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='6'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
            </VStack>
          </VStack>
        </Flex> */}
        {/* <ChakraSidebar/> */}
        <Grid
          h="200px"
          templateRows="repeat(1,3fr)"
          templateColumns="repeat(5, 2fr)"
          gap={1}
        >
          <GridItem rowSpan={2} colSpan={1} >
            <ChakraSidebar/>
          </GridItem>
          <GridItem colSpan={4} >
            <ChakraNav />
          </GridItem>
        </Grid>
    </>
  );
}

export default App;
