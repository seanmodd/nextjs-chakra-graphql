import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { useState } from 'react';
import {
  Heading,
  useColorMode,
  Text,
  Box,
  Input,
  Stack,
  IconButton,
  Flex,
  useToast,
  VStack,
} from '@chakra-ui/react';
import { SearchIcon, CloseIcon } from '@chakra-ui/icons';
import Variant from '../components/Variant';
import client from '../graphql/apolloClient';
import Fun from '../components/Animations/Fun';
import { GET_ALL_VARIANTS } from '../graphql/queries';
import Anime from '../components/Animations/Anime';

// function IndexPage({ AllVariants }) {
// function IndexPage({ AllVariants, results }) {
function IndexPage(results) {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = {
    light: 'gray.400',
    dark: 'gray.200',
  };

  //! from rick and morty
  const intialState = results;
  const [search, setSearch] = useState('');
  const [characters, setCharacters] = useState(intialState.characters);
  const toast = useToast();
  //! above from rick and morty
  console.log('GET_ALL_VARIANTS (from index.js) : ', results);
  console.log('from Characters (from index.js) : ', characters);
  return (
    <>
      <VStack>
        <Heading>All variants are as follows: </Heading>
        //! below is from rick and morty
        <form
          onSubmit={async (event) => {
            event.preventDefault();
            const results = await fetch('/api/SearchVariables', {
              method: 'post',
              body: search,
            });
            const { characters, error } = await results.json();
            if (error) {
              toast({
                position: 'bottom',
                title: 'An error occurred.',
                description: error,
                status: 'error',
                duration: 5000,
                isClosable: true,
              });
            } else {
              setCharacters(characters);
            }
          }}
        >
          <Stack maxWidth="350px" width="100%" isInline mb={8}>
            <Input
              placeholder="Search"
              textColor="black"
              zIndex="9999"
              color={color[colorMode]}
              borderWidth="4px"
              borderColor="gray.400"
              value={search}
              border="none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              icon={<SearchIcon />}
              disabled={search === ''}
              type="submit"
            />
            <IconButton
              colorScheme="red"
              aria-label="Reset "
              icon={<CloseIcon />}
              disabled={search === ''}
              onClick={async () => {
                setSearch('');
                setCharacters(intialState.characters);
              }}
            />
          </Stack>
        </form>
        //! above is from rick and morty
        <Variant characters={characters} />
        <Anime />
      </VStack>
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  const { data } = await client.query({
    query: GET_ALL_VARIANTS,
  });

  return {
    props: {
      characters: data.variants,
    },
  };
}
