import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import {
  Modal,
  ModalOverlay,
  VStack,
  ModalContent,
  Input,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  Heading,
  ModalBody,
  ModalCloseButton,
  useColorModeValue as mode,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  Flex,
  DrawerOverlay,
  DrawerContent,
  Box,
  DrawerCloseButton,
} from '@chakra-ui/react';

import IconMenu from './IconMenu';
import { DarkModeSwitch } from './App';

function MobileNavbar(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  return (
    <>
      <Flex>
        <Button
          m="0"
          p="0"
          // position="fixed"
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
            {/* <DrawerCloseButton /> */}
            <DrawerHeader color={mode('gray.900', 'gray.50')}>
              Menu
            </DrawerHeader>

            <DrawerBody spacing="50px">
              <VStack spacing="40px">
                <Button background="transparent">
                  <Link href="/shirts">
                    <Heading color={mode('gray.900', 'gray.50')}>
                      Shirts
                    </Heading>
                  </Link>
                </Button>
                <Button background="transparent">
                  <Link href="/hoodies">
                    <Heading color={mode('gray.900', 'gray.50')}>
                      Hoodies
                    </Heading>
                  </Link>
                </Button>
                <Button background="transparent">
                  <Link href="/hats">
                    <Heading color={mode('gray.900', 'gray.50')}>Hats</Heading>
                  </Link>
                </Button>
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
