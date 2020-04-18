import React from 'react';

class Register extends React.Component{
	constructor() {
		super();
		this.state = {
			email:'',
			password:'',
			name:''
		}
	}
	OnEmailChange = (event) => {
		this.setState({
			email: event.target.value
		})
	}
	OnPasswordChange = (event) => {
		this.setState({
			password:event.target.value
		})
	}

	OnNameChange = (event) => {
		this.setState({
			name: event.target.value
		})
	}

	onRegisterChange = (event) => {
		fetch('https://stark-savannah-82475.herokuapp.com/register',{
			method: 'post',
			headers: {'Content-Type':'application/json'},
			body: JSON.stringify({
				email:this.state.email,
				password:this.state.password,
				name:this.state.name
			})
		})
		.then(response=> response.json())
		.then(user => { 
			if(user.id) {
				this.props.loadUser(user);
				this.props.onRouteChange('home');			
			}
		})	
	}
	render() {
		return (
			<article className="br4 ba dark-gray b--black-10 w-100 w-50-m w-30-l  center">
				<main className="pa5 black-80">
				  <form className="measure">
				    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
				      <legend className="f1 fw6 ph0 mh0">Register</legend>
				      <div className="mt3">
				        <label className="db fw6 lh-copy f6" htmlFor="name-address">Name</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="Name" 
				        name="Name-address"  
				        id="Name-address"
				        onChange={this.OnNameChange}
				        />
				      	</div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
				        <input 
				        className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
				        type="email" 
				        name="email-address"  
				        id="email-address"
				        onChange={this.OnEmailChange}
				        />
				      </div>
				      <div className="mv3">
				        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
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
				    <input 
				      onClick={this.onRegisterChange} 
				      className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
				      type="button" 
				      value="Register"/>
				    </div>
				    <div className="center ma2 pa3" >
				    	<input 
				      	onClick={()=>this.props.onRouteChange('signin')} 
					    className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" 
					    type="button" 
					    value="SignIn"/>
				    </div>
				  </form>
				</main>
			</article>
		)
	}
}

export default Register;