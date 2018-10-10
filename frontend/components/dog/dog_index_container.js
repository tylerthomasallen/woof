import { connect } from 'react-redux';
import DogIndex from './dog_index';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    dogId: ownProps.match.params.dogId,
  };
};

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DogIndex);
