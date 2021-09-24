import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
} from '@chakra-ui/react';
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons';
import { Hero } from '../components/Hero';
import { Container } from '../components/Container';
import { Main } from '../components/Main';
import { DarkModeSwitch } from '../components/DarkModeSwitch';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import MobileNavbar from '../components/NavbarWithSubmenu/MobileNavbar';

const Index = () => (
  <>
    <Text>
      Example repository of of <Code>Next.js</Code> + <Code>chakra-ui</Code>.
    </Text>
  </>
);

export default Index;
