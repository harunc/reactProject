import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/Dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        promotions: PROMOTIONS,
        leaders: LEADERS,
        comments: COMMENTS,
    };
  }



  render() {
    const HomePage = () => {
      return(
      <Home dish = {this.state.dishes.filter((dish)=>dish.featured)[0]}
            promotions = {this.state.promotions.filter((promo)=>promo.featured)[0]}
            leaders = {this.state.leaders.filter((leader)=>leader.featured)[0]} />
      );
    }

    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

    const PassLeadersToAbout =({item}) => {
      return(
        <About leaders={this.state.leaders} />
      );

    }

    return (
      <div>
        <Header/>
        <Switch>
        <Route path='/home' component={HomePage}/>
        <Route exact path='/menu' component={ () => <Menu dishes={this.state.dishes} />} />
        <Route  path='/menu/:dishId' component={DishWithId} />
        <Route exact path='/contactus' component={Contact} />
        <Route exact path='/aboutus' component={PassLeadersToAbout} />
        <Redirect to='/home'/>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;