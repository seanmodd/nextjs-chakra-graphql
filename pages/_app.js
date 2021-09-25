import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from '@apollo/client';
import {
  ChakraProvider,
  ColorModeProvider,
  useColorMode,
  VStack,
  HStack,
  Box,
} from '@chakra-ui/react';
import { KBarProvider, KBarContent, KBarSearch, KBarResults } from 'kbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { OverrideMaterialUICss } from 'override-material-ui-css';
import React from 'react';
import NavbarWithSubmenu from '../components/NavbarWithSubmenu/App';
import OptimizedNavContent from '../components/OptimizedNavContent';
import theme from '../styles/theme';
import material_theme from '../utils/material_theme';

function MyApp({ Component, pageProps }) {
  // Create the Apollo client, add it to the pageProps.
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ApolloProvider client={client}>
      <KBarProvider actions={actions}>
        <ChakraProvider resetCSS theme={theme}>
          <ColorModeProvider
            options={{
              useSystemColorMode: true,
            }}
          >
            <ThemeProvider theme={material_theme}>
              <CssBaseline />

              <MyBox>
                {/* <NavbarWithSubmenu /> */}
                <OptimizedNavContent />
                <ContentBox>
                  <Component {...pageProps} />
                </ContentBox>
              </MyBox>
            </ThemeProvider>
          </ColorModeProvider>
        </ChakraProvider>
      </KBarProvider>
    </ApolloProvider>
  );
}

const actions = [
  {
    id: 'blog',
    name: 'Blog',
    shortcut: ['b'],
    keywords: 'writing words',
    perform: () => (window.location.pathname = 'blog'),
  },
  {
    id: 'contact',
    name: 'Contact',
    shortcut: ['c'],
    keywords: 'email',
    perform: () => (window.location.pathname = 'contact'),
  },
];
export default MyApp;

const MyBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <>
      <Box
        minH="100vh"
        px={['0px', '0px', '0px', '0px']}
        bg={bgColor[colorMode]}
      >
        {children}
      </Box>
    </>
  );
};

const ContentBox = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = {
    light: 'black',
    dark: 'white',
  };
  const bgColor = {
    light: 'gray.50',
    dark: 'gray.900',
  };
  return (
    <>
      <Box pt="50px" px={['0px', '0px', '0px', '0px']} bg={bgColor[colorMode]}>
        {children}
      </Box>
    </>
  );
};
