import { gql } from '@apollo/client';

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id
      name
    }
  }
`;

const GET_FEATURED = gql`
  query FeaturedProducts {
    products {
      name
      description
      id
      featured
      description
      variants {
        id
      }
    }
  }
`;

const GET_FEATURED_PRODUCTS_ONLY = gql`
  query FeaturedProducts {
    products(where: { featured: true }) {
      name
      featured
    }
  }
`;

export { GET_CATEGORIES, GET_FEATURED, GET_FEATURED_PRODUCTS_ONLY };
