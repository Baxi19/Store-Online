import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import stylesApp from "../../styles/appStyles";


export default function CardProduct(props) {
  const classes = stylesApp();
  const [hovered, setHover] = useState(false);

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box borderRadius={16} boxShadow={hovered ? 3 : 0} p={0.5}>
          <CardMedia
            component="img"
            alt={`IMAGE: ${props.item.name}`}
            height="180"
            image={`${props.item.image}`}
            title={props.item.name}
            className={classes.img}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            style={{
              transform: `${hovered ? "scale(1.1,1.1)" : "scale(1,1)"}`,
            }}
            border={hovered ? 1 : 0}
          />
        </Box>
      </CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h3">
          {!isNaN(props.item.price) ? (
            <b>₡{props.item.price}</b>
          ) : (
            <b>₡{props.item.new_price}</b>
          )}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
