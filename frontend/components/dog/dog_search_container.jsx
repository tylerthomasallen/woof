import { connect } from 'react-redux';
import DogSearchPage from './dog_search_page';
import { retrieveType } from '../../actions/dog_actions';

const mapStateToProps = ({ entities }, ownProps) => {
  const { dogs, types, dogTypes } = entities;

  return {
    typeId: ownProps.match.params.typeId,
    dogs,
    types,
    dogTypes,
    key: ownProps.location.pathname
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveType: (typeId) => dispatch(retrieveType(typeId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogSearchPage);
