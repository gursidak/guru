import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


// importing images;
import img1 from '../img/1.jpg';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';

const useStyles = makeStyles({
  root: {
    maxWidth: 330,
    boxShadow: "5px 5px 5px #999",
    '&:hover': {
      boxShadow:"8px 8px 8px #666"
    }
  },
});

export default function ImgMediaCard() {
  const classes = useStyles();

  const rounds = [
    { title: "ROUND 1", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi praesentium voluptatibus natus perferendis repudiandae impedit eos libero voluptate amet cupiditate", img: img1  },
    { title: "ROUND 2", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi praesentium voluptatibus natus perferendis repudiandae impedit eos libero voluptate amet cupiditate", img: img2  },
    { title: "ROUND 3", body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi praesentium voluptatibus natus perferendis repudiandae impedit eos libero voluptate amet cupiditate", img: img3  }
  ]

  const renderRounds = () => {

    return (

      rounds.map((round) => {
        return (
          <Grid item>
            <Card className={classes.root} key={round.title}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={round.title}
                  height="160"
                  image={round.img}
                  title={round.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {round.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {round.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>

        )
      })
    )
  }

  return (
    <Grid container justify="center" spacing={6} >

    {renderRounds()}
    </Grid>
  );
}
