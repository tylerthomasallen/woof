import React from 'react';


class NavModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      six: ''
    };
  }

  componentDidMount() {
    if (this.props.formType === 'temps') {
      this.setState({one: 'Confident'});
      this.setState({two: 'Timid'});
      this.setState({three: 'Independent'});
      this.setState({four: 'Laidback'});
      this.setState({five: 'Adaptable'});
      this.setState({six: 'Friendly'});

    } else if (this.props.formType === 'types') {
      this.setState({one: 'Hound'});
      this.setState({two: 'Herding'});
      this.setState({three: 'Sporting'});
      this.setState({four: 'Terrier'});
      this.setState({five: 'Toy'});
      this.setState({six: 'Working'});
    } else if (this.props.formType === 'chars') {
      this.setState({one: 'Small'});
      this.setState({two: 'Medium'});
      this.setState({three: 'Large'});
      this.setState({four: 'Kid Friendly'});
      this.setState({five: 'High Energy'});
      this.setState({six: 'Hypoallergenic'});
    }
  }

  renderModal() {
    const { one, two, three, four, five, six } = this.state;

    if (this.props.show) {
      return (
        <div className="modal-container">
          <div className="modal-left inner-modal">
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>{one}</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>{two}</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>{three}</a>
            </div>
          </div>

          <div className="modal-right inner-modal">
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>{four}</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>{five}</a>
            </div>
            <div className="modal-items">
              <i className="fas fa-bone"></i>
              <a>{six}</a>
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

export default NavModal;
