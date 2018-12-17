import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {updateFirst, updateLast, updateEmail} from '../../ducks/reducer';

class WizardTen extends Component {
    render(){
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>What is your name?</p> <br />

                    <input type="text" placeholder="First Name" onChange={(e)=>this.props.updateFirst(e.target.value)}/>
                    <input type="text" placeholder="Last Name" onChange= {(e)=>this.props.updateLast(e.target.value)}/>
                    <input type="text" placeholder="email" onChange={(e)=>this.props.updateEmail(e.target.value)}/>
                    
                    <Link to="/wEleven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
	return {
		firstName: state.firstName,
		lastName: state.lastName,
		email: state.email
	}
}
export default connect(mapStateToProps, {updateFirst, updateLast, updateEmail})(WizardTen);