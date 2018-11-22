import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from '../common/Spinner';
import Modal from '../common/Modal';

class Dashboard extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = { 
		show: false,
		title: "Hello"
	  };
	}

	showModal = () => {
		this.setState({show : true});
	}

	hideModal = () => {
		this.setState({
			show: false
		});
	}
	

	componentDidMount() {
		this.props.getCurrentProfile();
	}
	render() {
		const { user } = this.props.auth;
		const { profile, loading} = this.props.profile;

		let dashboardContent;

		if(profile === null || loading ){
			dashboardContent = <Spinner />
		} else {
			// Check if logged in user has a profile data
			if(Object.keys(profile).length > 0){
				dashboardContent = <h4>TODO: Display Profile</h4>
			} else {
				// User is logged in but has no profile
				dashboardContent = ( 
  				<div>
					<p className="lead text-muted">Welcome { user.name }</p>
					<p>You have yet setup a profile</p>
					<Link to="/create-profile" className="btn btn-lg btn-info">Create Profile</Link><hr />
					<button className="btn btn-lg btn-info" onClick={this.showModal}>open modal</button>
					<h1>React Model</h1>
					<Modal show={this.state.show} handleClose={this.hideModal}>
						<p>Modal</p>
						<p>Data</p>
						<p title={this.state.title}></p>

					</Modal>
  				</div>
				
				)
			}
		}
		return (
			<div className="dashboard">
			  <div className="container">
				<div className="row">
				  <div className="col-md-12">
					<h1 className="display-4">Dashboard</h1>
					{dashboardContent}
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

Dashboard.propTypes = {
  getCurrentProfile : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(
	mapStateToProps,
	{ getCurrentProfile }
)(Dashboard);
