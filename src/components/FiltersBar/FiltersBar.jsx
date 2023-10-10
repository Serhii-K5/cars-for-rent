import React, { useState } from 'react';
import FilterPanel from './FilterPanel';

function FiltersBar() {
  const initialData = [
    { field1: 'A', field2: 'B', field3: 'C', field4: 'D' },
    // Добавьте другие элементы данных
  ];

  const [filteredData, setFilteredData] = useState(initialData);

  const handleFilter = filteredData => {
    setFilteredData(filteredData);
  };

  return (
    <div>
      <FilterPanel data={initialData} onFilter={handleFilter} />
      {/* Отображение отфильтрованных данных */}
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltersBar;