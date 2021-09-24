import React from 'react';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import { KBarContent, KBarSearch, KBarResults } from 'kbar';
import { Heading, VStack } from '@chakra-ui/layout';

const categories = gql`
  query {
    categories {
      name
      id
    }
  }
`;

function IndexPage() {
  const { loading, error, data } = useQuery(categories);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log('GRAPHQL CATEGORIES DATA: ', data);
  return (
    <VStack>
      <Heading>Index Page</Heading>
      {data.categories.map((category) => (
        <div>
          <Heading>{category.name}</Heading>
        </div>
      ))}
    </VStack>
  );
}

export default IndexPage;

// export async function getStaticProps() {

// }
