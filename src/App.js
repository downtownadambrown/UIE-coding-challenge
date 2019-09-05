import React, { useState } from 'react';
import './App.scss';
import cardData from './data/data';
import Container from 'react-bootstrap/Container';
import AppHeader from './AppHeader';
import AppViewSelector from './AppViewSelector';

function App() {
    const [sorted, setSorted] = useState(false);
    const [sortBy, setSortBy] = useState(null);
    const [sortedData, setSortedData] = useState(cardData);
    const [paginated, setPaginated] = useState(false);

    const applySort = (sortBy) => {
        return [].concat(cardData).sort((a,b) => {
            if (a[sortBy] < b[sortBy]) return -1;
            if (a[sortBy] > b[sortBy]) return 1;
            return 0;
        });
    };

    const handleSort = e => {
        if (sorted) {
            if (e.target.name === sortBy) {
                setSorted(!sorted);
                setSortedData(cardData);
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

    const handlePaginationChange = e => {
        setPaginated(!paginated);
    };

    return (
        <Container>
            <AppHeader
                handleSort={handleSort}
                handlePaginationChange={handlePaginationChange}
                paginated={paginated}
                sorted={sorted}
                sortBy={sortBy}
            />
            <AppViewSelector
                paginated={paginated}
                sortedData={sortedData}
            />
        </Container>
    );
}

export default App;
