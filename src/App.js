import React, { useState } from 'react';
import './App.scss';
import Container from 'react-bootstrap/Container';
import cardData from './data/data';
import AppHeader from './AppHeader';
import AppViewSelector from './AppViewSelector';

function App() {
  const [sorted, setSorted] = useState(false);
  const [sortBy, setSortBy] = useState('');
  const [sortedData, setSortedData] = useState(cardData.map((card, index) => ({ ...card, Id: index })));
  const [paginated, setPaginated] = useState(false);

  const applySort = (sortType) => [].concat(cardData).sort((a, b) => {
    if (a[sortType] < b[sortType]) return -1;
    if (a[sortType] > b[sortType]) return 1;
    return 0;
  });

  const handleSort = (e) => {
    if (sorted) {
      if (e.target.name === sortBy) {
        setSorted(!sorted);
        setSortedData(cardData.map((card, index) => ({ ...card, Id: index })));
      } else {
        setSortBy(e.target.name);
        setSortedData(applySort(e.target.name));
      }
    } else {
      setSorted(true);
      setSortBy(e.target.name);
      setSortedData(applySort(e.target.name));
    }
  };

  const handlePaginationChange = () => {
    setPaginated(!paginated);
  };

  return (
    <div>
      <AppHeader
        handleSort={handleSort}
        handlePaginationChange={handlePaginationChange}
        paginated={paginated}
        sorted={sorted}
        sortBy={sortBy}
      />
      <main>
        <Container>
          <AppViewSelector
            paginated={paginated}
            sortedData={sortedData}
          />
        </Container>
      </main>
    </div>
  );
}

export default App;
