import { connect } from 'react-redux';
import DogPreviewItem from './dog_preview_item';
import { retrieveDogs } from '../../actions/dog_actions';

const mapStateToProps = ( {entities}, ownProps) => {
  const { dogs, types, dogTypes, reviews } = entities;
  return {
    dogs,
    types,
    dogTypes,
    reviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    retrieveDogs: () => dispatch(retrieveDogs())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogPreviewItem);
