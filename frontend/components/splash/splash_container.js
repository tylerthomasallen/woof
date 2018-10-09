import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SplashIndex from './splash_index';

const mapStateToProps = ( {session, entities} ) => {
  return {
    session: session,
    entities: entities,
    currentUser: entities.users[session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashIndex);
