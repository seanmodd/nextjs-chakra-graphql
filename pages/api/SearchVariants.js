import { colors } from '@material-ui/core';
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
import { id } from '../../.next/server/pages/index-variants';

const client = new ApolloClient({
  uri: 'http://localhost1337/graphql',
  cache: new InMemoryCache(),
});

export default async (req, res) => {
  const search = req.body;
  try {
    const { data } = await client.query({
      query: gql`
        query {
          # characters(filter: { name: "${search}" }) {
          variants(filter: { name: "${search}" }) {
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
    });
    res.status(200).json({ characters: data.characters.results, error: null });
  } catch (error) {
    if (error.message === '404: Not Found') {
      res.status(404).json({ characters: null, error: 'No Characters found' });
    } else {
      res
        .status(500)
        .json({ characters: null, error: 'Internal Error, Please try again' });
    }
  }
};
