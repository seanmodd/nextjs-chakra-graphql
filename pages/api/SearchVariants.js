import { colors } from '@material-ui/core';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});

export default async (req, res) => {
  const search = req.body;
  try {
    const { data } = await client.query({
      query: gql`
        query Variants {
          # characters(filter: { name: "${search}" }) {
          # variants(filter: { name: "${search}" }) {
            variants(where: {product: {name_contains: "${search}"}}) {
            id
            qty
            color
            size
            style
            price
            product {
              id
              name
              category {
                id
                name
                description
              }
              promo
              featured
              description
            }
            images {
              id
              url
              height
              width
              name
            }
            
          }
        }
      `,
      //  console.log("data.variants : ", data.variants);
    });
    res.status(200).json({ characters: data.variants, error: null });
  } catch (error) {
    console.log('error: ', error);
    if (error.message === '404: Not Found') {
      res.status(404).json({ characters: null, error: 'No Characters found' });
    } else {
      res.status(500).json({
        characters: null,
        error: 'Internal Error... gotta try again... or please try again',
      });
    }
  }
};
