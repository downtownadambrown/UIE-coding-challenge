import React, { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './AppViewSelector.scss';
import AppCard from './AppCard';

export default function AppViewSelector(props) {
  const { paginated, sortedData } = props;

  const DefaultView = (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="d-flex default-card-deck-wrapper">
      <div className="default-card-deck d-flex flex-wrap">
        {sortedData.map((card) => (
          <AppCard
            key={card.Id}
            heading={card.Heading}
            subHeading={card.Subheading}
            price={card.Price}
            showBridge={!!card.showBridge}
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
  for (let number = 1; number <= pageSets; number += 1) {
    items.push(
      <Pagination.Item id={number} key={number} active={number === activePage} variant="dark">
        {number}
      </Pagination.Item>,
    );
  }

  const paginationHandler = (e) => {
    setActivePage(+e.target.id);
  };

  const PaginatedView = (
    <div className="d-flex flex-column">
      <div className="card-deck d-flex">
        {sortedData
          .slice((activePage - 1) * pageSize, activePage * pageSize)
          .map((card) => (
            <AppCard
              key={card.Id}
              heading={card.Heading}
              subHeading={card.Subheading}
              price={card.Price}
              showBridge={!!card.showBridge}
            />
          ))}
      </div>
      <div className="align-self-center mt-2">
        <Pagination onClick={paginationHandler}>{items}</Pagination>
      </div>
    </div>
  );

  return (paginated ? PaginatedView : DefaultView);
}
