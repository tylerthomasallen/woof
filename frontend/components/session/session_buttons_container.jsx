import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import SessionButtons from './session_buttons';

// {session, entities}

const mapStateToProps = ({ entities, session}, { formType }) => {
  return {
    currentUser: entities.users[session.id],
    formType: formType
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionButtons);
