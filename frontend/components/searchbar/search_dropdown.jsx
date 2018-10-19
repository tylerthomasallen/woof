import React from 'react';
import { Link } from 'react-router-dom';

class SearchDropdown extends React.Component {

  // componentDidMount() {
  //   const { retrieveDog, dogs } = this.props;
  //   debugger;
  //   const totalDogs = 6;
  //   if (Object.values(dogs).length < totalDogs) {
  //     for (let i = 1; i <= totalDogs; i++) {
  //       retrieveDog(i);
  //     }
  //   }
  // }


  filterDogs() {
    const { dogs, searchInfo, types, retrieveDogs } = this.props;
    const filtered = [];
    Object.values(dogs).forEach(dog => {
      if (dog.name.toLowerCase().includes(searchInfo)) {
        filtered.push(dog);
      }
    });

    if (filtered.length <= 5) {
      Object.values(types).forEach(type => {
        if (type.name.toLowerCase().includes(searchInfo)) {
          filtered.push(type);
        }
      });
     }


    return filtered;
  }

  render() {

    const { formType, side, searchInfo, filtered } = this.props;


    if (searchInfo.length >= 1) {
      return (
        <div className={`${formType}-search-dropdown-container`}
          id={`${side}-search-bar-dropdown`}>

          {filtered.map(dog => (
            <Link to={`/dog/${dog.id}`} key={dog.id}>
              <div className={`${formType}-search-dropdown-item`}>
                <i className="fas fa-bone"></i>
                <span>{dog.name}</span>
              </div>
            </Link>
          ))}

        </div>
      );

    } else {

      return (
        <div className={`${formType}-search-dropdown-container`}
          id={`${side}-search-bar-dropdown`}>

          <Link to="/search/hound">
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Hound</span>
            </div>
          </Link>

          <Link to="/search/herding">
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Herding</span>
            </div>
          </Link>


          <Link to="/search/sporting">
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Sporting</span>
            </div>
          </Link>

          <Link to="/search/terrier">
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Terrier</span>
            </div>
          </Link>

          <Link to="/search/toy">
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Toy</span>
            </div>
          </Link>

          <Link to="/search/working">
            <div className={`${formType}-search-dropdown-item`}>
              <i className="fas fa-bone"></i>
              <span>Working</span>
            </div>
          </Link>


        </div>
      );
    }
  }
}

export default SearchDropdown;
