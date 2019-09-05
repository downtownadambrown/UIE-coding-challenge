import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './AppHeader.scss';

export default function AppHeader(props) {
    const { handleSort, sorted, sortBy, handlePaginationChange, paginated } = props;

    return (
        <div className="d-flex flex-row justify-content-between align-items-center p-2">
            <form>
                <div className="d-inline-flex align-items-center">
                    <label className="pagination-label m-0">
                        Enable Pagination
                        <input type="checkbox" className="pagination-checkbox" onChange={handlePaginationChange} checked={paginated}/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </form>
            <ButtonGroup aria-label="Sort Options" className="button-container d-flex flex-row">
                <Button
                    name="Heading"
                    variant={sortBy === "Heading" && sorted ? "primary" : "secondary"}
                    onClick={handleSort}
                    className="filter-button"
                >
                    Sort By Heading
                </Button>
                <Button
                    name="Subheading"
                    variant={sortBy === "Subheading" && sorted ? "primary" : "secondary"}
                    onClick={handleSort}
                    className="filter-button"
                >
                    Sort By Subheading
                </Button>
                <Button
                    name="Price"
                    variant={sortBy === "Price" && sorted ? "primary" : "secondary"}
                    onClick={handleSort}
                    className="filter-button"
                >
                    Sort By Price
                </Button>
            </ButtonGroup>
        </div>
    );
}