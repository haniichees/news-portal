import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Card, CardActionArea, CardContent, CardMedia, Link } from './';

const useStyles = makeStyles((theme) => ({
  card: {
    color: 'textPrimary',
    display: 'flex',
    backgroundColor: 'secondary',
  },
  media: {
    backgroundRepeat: 'no-repeat',
  },
  title: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.6rem',
    },
  },
}));

const News = ({ _id, title, description, image, date }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={6} lg={6} xl={6}>
      <Link href={`/news/id?id=` + `${_id}`} underline="none">
        <Card className={classes.card}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="270"
              className={classes.media}
              image={`data:image/png;base64,${image}`}
              alt={title}
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h4"
                component="h1"
                className={classes.title}
              >
                {title}
              </Typography>
              <Typography
                gutterBottom
                variant="subtitle1"
                color="textSecondary"
                component="p"
              >
                {description}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {date.slice(0, 10) + ` ` + date.slice(11, 16)}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default News;
