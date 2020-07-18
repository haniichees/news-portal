import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Card, CardContent, CardMedia, NewsSkeleton, Container } from './';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '80vh',
    padding: theme.spacing(2, 0, 4, 0),
  },
  media: {
    height: '40vh',
    backgroundRepeat: 'no-repeat',
    borderRadius: '5px',
    margin: theme.spacing(0, 0, 2, 0),
  },
  title: {
    [theme.breakpoints.down('lg')]: {
      fontSize: '2.7rem',
      lineHeight: 1.167,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '2.3rem',
      lineHeight: 1.167,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.9rem',
      lineHeight: 1.235,
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
      lineHeight: 1.334,
    },
  },
}));

const API_URL = 'https://fierce-sands-81057.herokuapp.com/api/News/id?id=';

export default function News() {
  const [data, setData] = useState([]);
  const loadData = function () {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    const id = params.get('id');
    axios.get(API_URL + id).then((res) => {
      setData(res.data);
    });
  };
  useEffect(() => {
    loadData();
  }, []);

  const classes = useStyles();

  return (
    <Container className={classes.root} maxWidth="lg">
      {data.length === 0 ? (
        <NewsSkeleton />
      ) : (
        <Card>
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h4"
              component="h1"
              align="left"
              paragraph
            >
              {data.title}
            </Typography>
            <CardMedia
              component="img"
              className={classes.media}
              image={`data:image/png;base64,${data.newsImage}`}
              alt={data.title}
            />
            <Typography
              gutterBottom
              variant="body1"
              color="inherit"
              component="p"
              paragraph
            >
              {data.mainText}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              paragraph
            >
              {data.creationDateTime} | {data.authorName}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Container>
  );
}
