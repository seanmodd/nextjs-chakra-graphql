import React, { useState } from 'react';
import clsx from 'clsx';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import { useQuery, gql } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { Heading } from '@chakra-ui/layout';
import featuredAdornment from '../images/featured-adornment.svg';
import frame from '../images/product-frame-grid.svg';
import explore from '../images/explore.svg';

import Rating from './Rating';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${featuredAdornment})`,
    backgroundPosition: 'top',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '180rem',
    padding: '0 2.5rem',
    [theme.breakpoints.down('md')]: {
      height: '220rem',
    },
  },
  featured: {
    height: '20rem',
    width: '20rem',
    [theme.breakpoints.down('md')]: {
      height: '15rem',
      width: '15rem',
    },
  },
  frame: {
    backgroundImage: `url(${frame})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    borderRadius: 0,
    height: '24.8rem',
    width: '25rem',
    boxSizing: 'border-box',
    boxShadow: theme.shadows[5],
    position: 'absolute',
    zIndex: 1,
    [theme.breakpoints.down('md')]: {
      height: '19.8rem',
      width: '20rem',
    },
  },
  slide: {
    backgroundColor: theme.palette.primary.main,
    height: '20rem',
    width: '24.5rem',
    zIndex: 0,
    transition: 'transform 0.5s ease',
    padding: '1rem 2rem',
    [theme.breakpoints.down('md')]: {
      height: '15.2rem',
      width: '19.5rem',
    },
  },
  slideLeft: {
    transform: 'translate(-24.5rem, 0px)',
  },
  slideRight: {
    transform: 'translate(24.5rem, 0px)',
  },
  slideDown: {
    transform: 'translate(0px, 17rem)',
  },
  productContainer: {
    margin: '5rem 0',
  },
  exploreContainer: {
    marginTop: 'auto',
  },
  exploreButton: {
    textTransform: 'none',
  },
  exploreIcon: {
    height: '1.5rem',
    marginLeft: '1rem',
  },
  chipLabel: {
    ...theme.typography.h5,
  },
  chipRoot: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const Featured_Products = gql`
  query FeaturedProducts {
    products(where: { featured: true }) {
      name
      featured
    }
  }
`;

export default function FeaturedProductions() {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(null);

  const { loading, error, data } = useQuery(Featured_Products);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log('categories (from OptimizedMobileNavbar.js): ', data);

  return (
    <Grid
      container
      direction="column"
      // justifyContent={matchesMD ? 'space-between' : 'center'}
      classes={{ root: classes.background }}
    >
      {data.products.map((product) => (
        <>
        {/* <Heading>{product.name}</Heading> */}
        <Grid
            item
            container
            // justifyContent={alignment}
            // key={node.strapiId}
            key={product.id}
            classes={{ root: classes.productContainer }}
            alignItems="center"
          >
            <IconButton
              onClick={() =>
                expanded === i ? setExpanded(null) : setExpanded(i)
              }
              classes={{ root: classes.frame }}
            >
              <img
                // src={
                //   process.env.GATSBY_STRAPI_URL + node.variants[0].images[0].url
                // }
                src="https://cdn.shopify.com/s/files/1/0035/1309/0115/products/Cashmere-Hoodie-Black-1_540x.jpg?v=1631175487"
                alt={product.name}
                className={classes.featured}
              />
            </IconButton>
            <Grid
              container
              direction="column"
              classes={{
                root: clsx(classes.slide, {
                  // [classes.slideLeft]:
                  //   !matchesMD && expanded === i && alignment === 'flex-end',
                  // [classes.slideRight]:
                  //   !matchesMD &&
                  //   expanded === i &&
                  //   (alignment === 'flex-start' || alignment === 'center'),
                  // [classes.slideDown]: matchesMD && expanded === i,
                }),
              }}
            >
              <Grid item>
                <Typography variant="h4">{product.name.split(' ')[0]}</Typography>
              </Grid>
              <Grid item>
                <Rating number={5} />
              </Grid>
              <Grid item>
                <Chip
                  classes={{ root: classes.chipRoot, label: classes.chipLabel }}
                  // label={`$${node.variants[0].price}`}
                  label="$99"
                />
              </Grid>
              <Grid item classes={{ root: classes.exploreContainer }}>
                <Button classes={{ root: classes.exploreButton }}>
                  <Typography variant="h5">Details</Typography>
                  <img
                    src={explore}
                    alt="go to product details"
                    className={classes.exploreIcon}
                  />
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </>
      ))}
    </Grid>
  );
}

