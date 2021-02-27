import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Error from "../screens/ErroPage/Error"
import Login from "../screens/LoginPage/Login"
import Feed from "../screens/FeedPage/Feed"
import PostImage from "../screens/PostImagePage/PostImage"
import ImageDetails from "../screens/ImageDetailsPage/ImageDetails"
import SignUp from "../screens/SignUpPage/SignUp"

import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

import {goToLogin, goToSignUp} from "../router/coordinator"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          < Header title="Inscreva-se aqui!" goTo={goToSignUp} />
            <Login/>
        </Route>
        <Route exact path="/signup">
            <Header title="Voltar para Login" goTo={goToLogin} />
            <SignUp/>
        </Route>
        <Route exact path={['/feed', '/']}>
            <Header/>
            <Feed/>
        </Route>
        <Route exact path="/image/:id">
            <Header/>
            <ImageDetails/>
        </Route>
        <Route exact path="/image/create">
            <Header/>
            <PostImage/>
        </Route>
        <Route>
          <Header title="Voltar para Login" goTo={goToLogin}/>
            <Error/>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Router
