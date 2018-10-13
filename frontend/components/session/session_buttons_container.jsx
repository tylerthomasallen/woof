import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionButtons from './session_buttons';

const mapStateToProps = ( {session, entities} ) => {
  return {
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
