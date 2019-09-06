import React from 'react';
import Button from 'react-bootstrap/Button';
import './AppHeader.scss';
import PropTypes from 'prop-types';

export default function AppHeader(props) {
  AppHeader.propTypes = {
    handleSort: PropTypes.func.isRequired,
    sorted: PropTypes.bool.isRequired,
    sortBy: PropTypes.string.isRequired,
    handlePaginationChange: PropTypes.func.isRequired,
    paginated: PropTypes.bool.isRequired,
  };

  const {
    handleSort, sorted, sortBy, handlePaginationChange, paginated,
  } = props;

  return (
  // eslint-disable-next-line react/jsx-filename-extension
    <header className="d-flex flex-row justify-content-between align-items-center p-3 mb-2 shadow bg-dark text-white">
      <form>
        <div className="d-inline-flex align-items-center">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="pagination-label m-0">
              Enable Pagination
            <input type="checkbox" className="pagination-checkbox" onChange={handlePaginationChange} checked={paginated} />
            <span className="checkmark" />
          </label>
        </div>
      </form>
      <div className="d-flex flex-row justify-content-end">
        <Button
          name="Heading"
          variant={sortBy === 'Heading' && sorted ? 'primary' : 'secondary'}
          onClick={handleSort}
          className="filter-button"
        >
            Sort By Heading
        </Button>
        <Button
          name="Subheading"
          variant={sortBy === 'Subheading' && sorted ? 'primary' : 'secondary'}
          onClick={handleSort}
          className="filter-button"
        >
            Sort By Subheading
        </Button>
        <Button
          name="Price"
          variant={sortBy === 'Price' && sorted ? 'primary' : 'secondary'}
          onClick={handleSort}
          className="filter-button"
        >
            Sort By Price
        </Button>
      </div>
    </header>
  );
}
