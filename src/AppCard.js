import React from 'react';
import './AppCard.scss';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function AppCard(props) {
  AppCard.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    showBridge: PropTypes.bool.isRequired,
  };

  const {
    heading, subHeading, price, showBridge,
  } = props;

  const addCommas = /\B(?=(\d{3})+(?!\d))/g;
  const renderPrice = (initialPrice) => '$'.concat(initialPrice.toString().replace(addCommas, ','));
  const renderHeading = (initialText) => initialText.toLowerCase().split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
  const renderSubheading = renderHeading;

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <Card className="card-item m-2 shadow border-0">
      <Card.Header className={showBridge ? 'bridge-bg' : 'tiles-bg'}>
        {!showBridge && (
        <Card.Img className="overlay-image" src="http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png" />
        )}
      </Card.Header>
      <Card.Body>
        <Card.Title className="card-prop-text">{renderHeading(heading)}</Card.Title>
        <Card.Text className="card-prop-text">
          {renderSubheading(subHeading)}
        </Card.Text>
      </Card.Body>
      <hr className="w-80" />
      <Card.Footer className="d-flex flex-row justify-content-end py-1 px-2">
        <span className="price-text">
          {renderPrice(price)}
        </span>
      </Card.Footer>
    </Card>
  );
}

export default AppCard;
