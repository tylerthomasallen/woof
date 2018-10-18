import { connect } from 'react-redux';
import DogSearchPage from './dog_search_page';
import { retrieveDogs } from '../../actions/dog_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    type: ownProps.match.params.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveDogs: (dogId) => dispatch(retrieveDogs(dogId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogSearchPage);
