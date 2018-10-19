import { connect } from 'react-redux';
import DogSearchPage from './dog_search_page';
import { retrieveDogs } from '../../actions/dog_actions';

const mapStateToProps = ({ entities }, ownProps) => {
  const { dogs, types } = entities;

  return {
    type: ownProps.match.params.type,
    dogs,
    types
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveDogs: (searchInfo) => dispatch(retrieveDogs(searchInfo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogSearchPage);
