import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {
	render() {
		const { user } = this.props;
		if (!user) {
			return <div>Unavailable user</div>;
		}
		return <div className='header'>{user.name} </div>;
	}
}

const mapStateToProps = (state, ownProps) => ({
	user: state.users.find(user => user.id === ownProps.userId)
});

const mapDispatchToProps = {};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(UserHeader);
