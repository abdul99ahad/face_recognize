import React from 'react';
import './App.css';
import Particles from 'react-particles-js';

import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import UrlBox from './components/UrlBox/UrlBox.js';
import Rank from './components/Rank/Rank.js';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import FaceRecognize from './components/FaceRecognize/FaceRecognize.js'

const density = {"particles": {
          "number": {
              "value": 70
          }
          ,
          "size": {
              "value": 2
          }
      },
  };

const styleForParticles = {width: '100%', position:'fixed', zIndex: '-1'};


const initialState = {
  test:'',
  input:'',
  imageURL:'',
  box: {},
  route: 'signin',
  user: {
    id:'',
    name:'',
    email:'',
    entries:'',
    joinedIn:''
  }
}

class App extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user:{
        id:data.id,
        name:data.name,
        email:data.email,
        entries:data.entries,
        joinedIn:data.joinedIn
      }
    })
    console.log(this.state.user);
  }

  OnInputChange = (event) => {
    this.setState({input:event.target.value});
    if(event.target.value == '') {
      this.setState({
        box:{}
      })
    }
  }

  FaceDetectionBox = (data) => {
    const image = document.getElementById('image');
    const width = Number(image.width);
    const height = Number(image.height);
    this.setState(
      {
        box:{top:data.top_row*height,
          bottom:height-(data.bottom_row*height),
          right:width-(data.right_col*width),
          left:data.left_col*width
      }
    }
    )
  }

  OnButtonSubmit = () => {
    fetch('https://stark-savannah-82475.herokuapp.com/imageURL',{
          method: 'post',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            input: this.state.input
          })
        })
    .then(response => response.json())
    .then( response => {
      this.FaceDetectionBox(response.outputs[0].data.regions[0].region_info.bounding_box);
      if(response) {
        fetch('https://stark-savannah-82475.herokuapp.com/image',{
          method: 'put',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(response => response.json())
        .then(entry => this.setState(Object.assign(this.state.user,{entries: entry})))
      }

    }
  ) 
    .catch((err) => console.log(err));  
  }

  OnRouteChange = (route) => {
    if(route==='signin') {
      this.setState(initialState);
    }
    this.setState({route:route});
  }
  render() {
    return (
    <div className="">
      <Particles   params={density} style={styleForParticles} />
      <Logo />
      {this.state.route === 'signin' 
      ? <Signin loadUser={this.loadUser} onRouteChange={this.OnRouteChange}/> 
      : this.state.route === 'register' ? <Register loadUser={this.loadUser} onRouteChange={this.OnRouteChange} />
      :
      <div>
        <Navigation onRouteChange={this.OnRouteChange}/> 
        <Rank name={this.state.user.name} entries={this.state.user.entries}/>
        <UrlBox OnInputChange={this.OnInputChange} OnButtonSubmit={this.OnButtonSubmit}/>
        <FaceRecognize Image={this.state.input} dimensions={this.state.box}/>
      </div> }
    </div>
  );
  }
}

export default App;
