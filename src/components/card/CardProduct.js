import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    height: 300,
    float: "left",
    padding: "16px",
    margin: "16px",
  },

  img: {
    width: "100%",
    borderRadius: "10%",
  },
});

export default function CardProduct(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia 
          component="img"
          alt={`IMAGE: ${props.item.name}`}
          height="180"
          image={`${props.item.image}`}
          title={props.item.name}
          className={classes.img}
        />
        
      </CardActionArea>
      <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
          {!isNaN(props.item.price)
                ? <b>₡{props.item.price}</b>
                : <b>₡{props.item.new_price}</b>
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.name}
          </Typography>
        </CardContent>
    </Card>
  );
}