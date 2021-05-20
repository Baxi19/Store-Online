import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Chip from "@material-ui/core/Chip";
import Grid from "@material-ui/core/Grid";
import stylesApp from "../../styles/appStyles";

// This is a Component used to show the product's info
export default function CardProduct(props) {
  const classes = stylesApp(); // just a instance of styles
  const [hovered, setHover] = useState(false); //Hook to check if is hover or Not

  //Input: String
  //Output: First letter in uppercase and the rest in lowercase
  const format = (str) => {
    return str.slice(0, 1).toUpperCase().concat(str.slice(1).toLowerCase());
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box borderRadius={16} boxShadow={hovered ? 0 : 3} p={0.5}>
          <CardMedia
            component="img"
            alt={`Image of: ${format(props.item.name)}`}
            height="180"
            image={props.item.image}
            title={format(props.item.name)}
            className={classes.img}
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            style={{
              transform: `${hovered ? "scale(1.1,1.1)" : "scale(1,1)"}`,
            }}
          />
        </Box>
      </CardActionArea>
      <CardContent>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography gutterBottom variant="h5" component="h3">
            {!isNaN(props.item.price) ? (
              <b>₡{props.item.price}</b>
            ) : (
              <b>₡{props.item.new_price}</b>
            )}
          </Typography>
          <Chip color="secondary" size="small" label="Nuevo" />
        </Grid>
        <Typography variant="body2" component="p">
          {format(props.item.name)}
        </Typography>
      </CardContent>
    </Card>
  );
}
