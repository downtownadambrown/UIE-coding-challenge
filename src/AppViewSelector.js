import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import AppCard from './AppCard';

export default function AppViewSelector(props) {
  const { paginated, sortedData } = props;
  console.log('paginated: ', paginated);

  const DefaultView = (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="d-flex flex-wrap justify-content-center">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {sortedData.map((card, index) => (
          <AppCard
            key={index}
            heading={card.Heading}
            subHeading={card.Subheading}
            price={card.Price}
            showBridge={card.showBridge ? card.showBridge : false}
          />
        ))}
      </div>
    </div>
  );

  const [activePage, setActivePage] = useState(1);
  const pageSize = 5;
  const items = [];
  const pageSets = (Math.ceil(sortedData.length / pageSize) < 5)
    ? Math.ceil(sortedData.length / pageSize)
    : 5;
  for (let number = 1; number <= pageSets; number++) {
    items.push(
      <Pagination.Item id={number} key={number} active={number === activePage}>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationHandler = (e) => {
    setActivePage(+e.target.id);
  };

  const PaginatedView = (
    <div className="d-flex flex-column">
      <div className="d-flex flex-row flex-wrap justify-content-center">
        {sortedData
          .slice((activePage - 1) * pageSize, activePage * pageSize)
          .map((card, index) => (
            <AppCard
              key={index}
              heading={card.Heading}
              subHeading={card.Subheading}
              price={card.Price}
              showBridge={card.showBridge ? card.showBridge : false}
            />
          ))}
      </div>
      <div className="align-self-center">
        <Pagination onClick={paginationHandler}>{items}</Pagination>
      </div>
    </div>
  );

  return (paginated ? PaginatedView : DefaultView);
}
