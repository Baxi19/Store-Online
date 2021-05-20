import React from "react";
import Header from "../header/Header";
import { useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CardProduct from "../card/CardProduct";
import Container from "@material-ui/core/Container";

const Home = () => {
  const listItems = useSelector((store) => store.items.array);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <Container fixed>
        <Grid
          cols={4}
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
        >
          {listItems.map((item) => (
            <Grid item key={item.id}>
              <CardProduct key={item.id} item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
