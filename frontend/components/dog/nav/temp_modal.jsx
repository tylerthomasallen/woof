import React from 'react';


class TempModal extends React.Component {

  componentDidMount() {

  }

  renderModal() {
    if (this.props.show) {
      return (
        <div className="modal-container">
          <div className="modal-left inner-modal">
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>Confident</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>Timid</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>Independent</a>
            </div>
          </div>

          <div className="modal-right inner-modal">
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>Laidback</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>Adaptable</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>Friendly</a>
            </div>
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
