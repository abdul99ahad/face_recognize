import React from 'react';

class Signin extends React.Component {
	constructor() {
		super();
		this.state = {
			onSignInEmail: '',
			onSignInPassword:''
		}
	}


	OnEmailChange = (event) => {
		this.setState({
			onSignInEmail: event.target.value
		})
	}

	OnPasswordChange = (event) => {
		this.setState({
			onSignInPassword: event.target.value
		})
	}

	OnSubmitChange = () => {	
		fetch('https://stark-savannah-82475.herokuapp.com/signin',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.state.onSignInEmail,
				password:this.state.onSignInPassword
			})
		})
		.then(response => response.json())
		.then(data => {
			if(data.id) {
				console.log(data);
				this.props.loadUser(data);
				this.props.onRouteChange('home');
			} else {
				console.log('Bad Request');
			}
		})
		//this.props.onRouteChange('home');
	}

	printingDetails = () => {
		console.log(this.state);
		// this.props.onRouteChange('home');
	}


	render() {
		return (
			<article className="br4 ba dark-gray b--black-10 w-100 w-50-m w-30-l  center">
				<main className="pa5 black-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Sign In</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6">Email</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.OnEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6">Password</label>
				        <input 
				        className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="password" 
				        name="password"  
				        id="password"
				        onChange={this.OnPasswordChange}
				        />
				      </div>
				    </fieldset>
				    <div className="center">
				      <input onClick={this.OnSubmitChange} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="button" 
				      value="Sign in"/>
				    </div>
				    <div className="lh-copy mt3 center">
				      <a href="#0" className="f4 link dim black db" onClick={()=> this.props.onRouteChange('register')}>Register</a>
				    </div>
				  </form>
				</main>
			</article>
		)
	}
} 

export default Signin;