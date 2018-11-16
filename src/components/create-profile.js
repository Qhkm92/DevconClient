import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from '../common/Spinner';

class CreateProfile extends Component {

		return (
			<div className="CreateProfile">
			  <div className="container">
				<div className="row">
				  <div className="col-md-12">
					<h1 className="display-4">CreateProfile</h1>
					{CreateProfileContent}
				    </div>
				  </div>
				</div>
			</div>
		);
	}
}

CreateProfile.propTypes = {
  getCurrentProfile : PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
	profile: state.profile,
	auth: state.auth
});

export default connect(
	null
)(CreateProfile);
