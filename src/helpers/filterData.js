const consist = (a, b) => {
    return a.toLowerCase().indexOf(b.toLowerCase()) !== -1;
};

export const handleFilter = (item, term) => {
    return consist(item.currency, term);
};


// WEBPACK FOOTER //
// src/drone/src/src/helpers/filterData.ts



// WEBPACK FOOTER //
// ./src/helpers/filterData.ts
