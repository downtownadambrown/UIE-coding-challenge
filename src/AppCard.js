import React from 'react';
import './AppCard.scss';
import Card from 'react-bootstrap/Card';

function AppCard(props) {
    const { heading, subHeading, price, showBridge } = props;

    const renderPrice = price => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    const renderHeading = heading =>
        heading.toLowerCase().split(' ')
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(' ');
    const renderSubheading = renderHeading;

    return (
        <Card className="card-item m-2 shadow border-0">
            <Card.Header className={showBridge ? "bridge-bg" : "tiles-bg"}>
                {!showBridge && (
                    <Card.Img className="p-4" src="http://res.cloudinary.com/bguggie/image/upload/v1425514736/place_holder_zuvywg.png" />
                )}
            </Card.Header>
            <Card.Body>
                <Card.Title>{renderHeading(heading)}</Card.Title>
                <Card.Text>
                    {renderSubheading(subHeading)}
                </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex flex-row justify-content-end">
                <span className="price-text">${renderPrice(price)}</span>
            </Card.Footer>
        </Card>
    );
}

export default AppCard;
