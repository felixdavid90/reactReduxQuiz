import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import './App.css';
import Home from './pages/home';
import NewPost from './pages/newPost'


import { getPosts } from './redux/actions/postAction';
import { getAuthors } from './redux/actions/authorAction';
import { getComments } from './redux/actions/commentAction';

class App extends Component {

  componentDidMount(){
    this.props.getPosts();
    this.props.getAuthors();
    this.props.getComments();
  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/post/new" component={NewPost}/>
          {/* <Route exact path="/post/:id" component={}/>
          <Route exact path="/author/:id" component={}/>
          <Route component={}/> */}

        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getPosts: bindActionCreators(getPosts, dispatch),
  getAuthors: bindActionCreators(getAuthors, dispatch),
  getComments: bindActionCreators(getComments, dispatch)
})

const mapStateToProps = (state) => ({})



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
