import React from 'react';

class MoreDogInfo extends React.Component {

  render() {
    const { dog } = this.props;
    return (
      <div className="more-dog-info">
        <h3>More dog info</h3>

        <div className="dog-info-attribute">
          <span>Size</span>
          <span>{'Large'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Good for Kids</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Hypoallergenic</span>
          <span>{dog.hypoallergenic ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Adapts Well to Apartment Living</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Easy to Groom</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Easy to Train</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Good for Novice Owners</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Affectionate with Family</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Dog Friendly</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Energy Level</span>
          <span>{'High'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Barks</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Tolerates Cold Weather</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Tolerates Warm Weather</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

        <div className="dog-info-attribute">
          <span>Tolerates Warm Weather</span>
          <span>{dog.good_with_kids ? 'Yes' : 'No'}</span>
        </div>

      </div>
    );
  }
}

export default MoreDogInfo;
