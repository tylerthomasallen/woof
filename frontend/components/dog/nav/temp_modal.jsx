import React from 'react';


class TempModal extends React.Component {

  componentDidMount() {

  }

  renderModal() {
    if (this.props.show) {
      return (
        <div className="modal-container">
          <div className="modal-left inner-modal">
            <a>Happy</a>
            <a>Happy</a>
            <a>Happy</a>
            <a>Happy</a>
          </div>

          <div className="modal-right inner-modal">
            <a>Happy</a>
            <a>Happy</a>
            <a>Happy</a>
            <a>Happy</a>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        {this.renderModal()}
      </div>
    );
  }
}

export default TempModal;
