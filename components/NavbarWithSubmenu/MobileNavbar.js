import { useQuery, gql } from '@apollo/client';
import {
  VStack,
  Button,
  useDisclosure,
  Heading,
  useColorModeValue as mode,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  DrawerOverlay,
  DrawerContent,
} from '@chakra-ui/react';

import Link from 'next/link';
import React, { useRef } from 'react';
import { DarkModeSwitch } from './App';
import IconMenu from './IconMenu';

const categories = gql`
  query {
    categories {
      name
      id
    }
  }
`;

function MobileNavbar(props) {
  const btnRef = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, data } = useQuery(categories);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log('GRAPHQL CATEGORIES DATA (from MobileNavbar.js): ', data);

  return (
    <>
      <Flex>
        <Button
          m="0"
          p="0"
          top="-5"
          backgroundColor="transparent"
          ref={btnRef}
          onClick={onOpen}
        >
          <IconMenu />
        </Button>
        <Drawer
          zIndex="1"
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent bg={mode('gray.50', 'gray.900')}>
            <DrawerHeader color={mode('gray.900', 'gray.50')}>
              Menu
            </DrawerHeader>

            <DrawerBody spacing="50px">
              <VStack spacing="40px">
                {data.categories.map((category) => (
                  <Button background="transparent">
                    <Link href="/shirts">
                      <Heading color={mode('gray.900', 'gray.50')}>
                        {category.name}
                      </Heading>
                    </Link>
                  </Button>
                ))}
              </VStack>
            </DrawerBody>
            <DrawerFooter>
              <DarkModeSwitch />
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Flex>
    </>
  );
}

export default MobileNavbar;
