import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  IconButton,
  Flex,
  useColorMode,
  HStack,
  VStack,
  Icon,
  Heading,
  useDisclosure,
  VisuallyHidden,
  useColorModeValue as mode,
} from '@chakra-ui/react';

import Link from 'next/link';
import Image from 'next/image';

import { CgProfile } from 'react-icons/cg';
import { FaSearchengin } from 'react-icons/fa';
import { MdSettings } from 'react-icons/md';

import * as React from 'react';

import IconAccount from './IconAccount';
import { Logo } from './Logo';
import MobileNavbar from './MobileNavbar';
import { NavLink } from './NavLink';
import { NavMenu } from './NavMenu';
import { Submenu } from './Submenu';
import { ToggleButton } from './ToggleButton';
import { links } from './_data';

const MobileNavContext = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex minW="100vw" bg={mode('gray.50', 'gray.900')}>
        <VStack>
          <HStack>
            <Flex
              align="center"
              justify="space-between"
              // className="nav-content__mobile"
              color={mode('gray.900', 'gray.50')}
              justifyContent="space-between"
              minW={['90vw', '95vw', '95vw', '95vw']}
              // mr={['40px', '40px', '40px', '100px']}
              // maxW="90vw"
              bg={mode('gray.50', 'gray.900')}
              {...props}
            >
              <Box ml={['20px', '20px', '100px', '150px']} mt="50px">
                {/* <ToggleButton isOpen={isOpen} onClick={onToggle} /> */}
                <MobileNavbar />
              </Box>
              <Box
                as="a"
                pl={['20px', '20px', '20px', '20px']}
                pr={['-20px', '-20px', '-20px', '-20px']}
                rel="home"
                textDecoration="none"
                mx="auto"
              >
                <Logo h="24px" iconColor="blue.400" />
              </Box>
              <Box
              // mr={['20px', '40px', '40px', '50px']}
              // visibility={{
              //   base: 'hidden',
              //   sm: 'visible',
              // }}
              >
                <HStack>
                  <Link
                    display={{
                      base: 'none',
                      md: 'fixed',
                      lg: 'fixed',
                    }}
                    href="/auth/login"
                  >
                    <Button
                      display={{
                        base: 'fixed',
                        md: 'fixed',
                        lg: 'fixed',
                      }}
                      mt="0"
                      _hover={{ background: 'transparent' }}
                      background="transparent"
                    >
                      <Icon
                        display={{
                          base: 'fixed',
                          md: 'fixed',
                          lg: 'fixed',
                        }}
                        mt="0"
                        width="50px"
                        height="50px"
                        color="#8344ff"
                        as={FaSearchengin}
                      />
                    </Button>
                  </Link>
                  <Link
                    display={{
                      base: 'none',
                      md: 'fixed',
                      lg: 'fixed',
                    }}
                    href="/auth/login"
                  >
                    <Button
                      display={{
                        base: 'none',
                        md: 'fixed',
                        lg: 'fixed',
                      }}
                      top="-2"
                      mt="0"
                      _hover={{ background: 'transparent' }}
                      background="transparent"
                    >
                      <Icon
                        display={{
                          base: 'fixed',
                          md: 'fixed',
                          lg: 'fixed',
                        }}
                        mt="0"
                        width="50px"
                        height="50px"
                        color="#8344ff"
                        as={CgProfile}
                      />
                    </Button>
                  </Link>
                </HStack>
              </Box>
            </Flex>
          </HStack>

          <HStack align="center" justifyContent="center">
            <HStack spacing="50px" mx="0px">
              <Link href="/about">
                <Button
                  color={mode('gray.900', 'gray.50')}
                  background="transparent"
                >
                  <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                    ABOUT
                  </Heading>
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  background="transparent"
                  color={mode('gray.900', 'gray.50')}
                >
                  <Heading fontWeight="normal" fontSize="xl" textAlign="center">
                    CONTACT
                  </Heading>
                </Button>
              </Link>
            </HStack>
          </HStack>
        </VStack>
      </Flex>
    </>
  );
};

const DesktopNavContent = (props) => (
  // const dispatch = useDispatch();
  // const { auth } = useSelector((state) => ({ ...state }));
  // // const history = useHistory();

  // const logout = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //     payload: null,
  //   });
  //   window.localStorage.removeItem('auth');
  //   // history.push('/login');
  // };
  <Flex
    // className="nav-content__desktop"
    align="center"
    justify="space-between"
    position="fixed"
    width="100%"
    pr="80px"
    // zIndex="1"
    textDecoration="none"
    // w="100vw"

    bg={mode('gray.50', 'gray.900')}
    // px="80px"
    {...props}
  >
    <Box textDecoration="none" as="a" href="#" rel="home">
      <Logo h="6" iconColor="blue.500" />
    </Box>
    <HStack
      as="ul"
      id="nav__primary-menu"
      aria-label="Main Menu"
      spacing="20px"
      listStyleType="none"
    >
      {links.map((link, idx) => (
        <Box
          textDecoration="none"
          as="li"
          key={idx}
          id={`nav__menuitem-${idx}`}
        >
          {link.children ? (
            <Submenu.Desktop zIndex="9" textDecoration="none" link={link} />
          ) : (
            <NavLink.Desktop textDecoration="none" zIndex="9" href={link.href}>
              {link.label}
            </NavLink.Desktop>
          )}
        </Box>
      ))}
    </HStack>
    <HStack
      mb="15px"
      spacing="4"
      minW="30vw"
      // mr="20px"
      // justify="space-between"
    >
      {/* {auth !== null && (
        <Box
          as="a"
          href="#"
          color={mode('blue.600', 'blue.300')}
          fontWeight="bold"
          onClick={logout}
        >
          Log out
        </Box>
      )}

      {auth === null && (
        <>
          <Link href="/auth/login">
            <Box
              as="a"
              href="#"
              _hover={{ color: 'blue.200' }}
              color={mode('blue.600', 'blue.300')}
              fontWeight="bold"
            >
              Sign In
            </Box>
          </Link>
          <Link href="/auth/register">
            <Button
              bg={mode('blue.400', 'blue.400')}
              as="a"
              _hover={{ color: 'blue.200' }}
              href="#"
              colorScheme="blue"
              fontWeight="bold"
            >
              Sign up for free
            </Button>
          </Link>
          <DarkModeSwitch />
        </>
      )} */}
    </HStack>
  </Flex>
);
export const NavContent = {
  Mobile: MobileNavContext,
  Desktop: DesktopNavContent,
};

const DarkModeSwitch = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'gray.400',
    dark: 'gray.200',
  };
  const bgColor = {
    light: 'gray.200',
    dark: 'gray.900',
  };
  return (
    <>
      <HStack
        position="fixed"
        top={['10px', '16px', '16px', '16px']}
        right="-30px"
        zIndex="1"
        // backgroundColor="red.500"
        // borderWidth="4px"
        // backgroundColor={bgColor[colorMode]}
        // w="100vw"
        justify="flex-end"
      >
        <IconButton
          aria-label="Toggle Dark Switch"
          icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          zIndex="1"
          onClick={toggleColorMode}
          color={iconColor[colorMode]}
          bgColor={bgColor[colorMode]}
          marginRight="4rem"
          // bg={bgColor[colorMode]}
        >
          {children}
        </IconButton>
      </HStack>
    </>
  );
};
