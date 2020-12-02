import React from "react";
import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import "./App.css";

function App() { 
  return (
    <Container>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={3}
          style={{ backgroundColor: "green" }}
        >
          <Profile />
        </Grid>
        <Grid xs style={{ backgroundColor: "red" }}>
          <Header />
          <Router>
            <Switch>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
              <Route path="/">
                <Resume />
              </Route>
            </Switch>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
