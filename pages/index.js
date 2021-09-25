import { Heading, VStack } from '@chakra-ui/react';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import Button from '@material-ui/core/Button';
import { GET_FEATURED, GET_FEATURED_PRODUCTS_ONLY } from '../graphql/queries';
import FeaturedProducts from '../components/FeaturedProducts';

function IndexPage({ featuredProducts }) {
  console.log('featuredProducts (from index.js) : ', featuredProducts);
  return (
    <>
      <VStack>
        <Heading>Featured Products are as follows: </Heading>
        <Button variant="contained">Hello World</Button>
        {featuredProducts.map((product) => (
          <div key={product.id}>
            <Heading>{product.name}</Heading>
          </div>
        ))}
        <FeaturedProducts />
      </VStack>
    </>
  );
}

export default IndexPage;

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: GET_FEATURED_PRODUCTS_ONLY,
  });

  return {
    props: {
      featuredProducts: data.products,
    },
  };
}
