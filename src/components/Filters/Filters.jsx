// import {

// } from "./CardModal.styled";


// export default FiltersBar = () => {
//   return (
//     <>
//       <form action=""></form>
//     </>
//   )
// }

import React, { useState } from 'react';

function FilterPanel({ data, onFilter }) {
  const [filter1, setFilter1] = useState('');
  const [filter2, setFilter2] = useState('');
  const [filter3, setFilter3] = useState('');
  const [filter4, setFilter4] = useState('');

  const handleFilterClick = () => {
    // Примените фильтры к данным и передайте результат в родительский компонент
    const filteredData = data.filter(item => {
      // Ваша логика фильтрации для каждого поля
      return (
        item.field1.includes(filter1) &&
        item.field2.includes(filter2) &&
        item.field3.includes(filter3) &&
        item.field4.includes(filter4)
      );
    });

    onFilter(filteredData);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Фильтр 1"
        value={filter1}
        onChange={e => setFilter1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Фильтр 2"
        value={filter2}
        onChange={e => setFilter2(e.target.value)}
      />
      <input
        type="text"
        placeholder="Фильтр 3"
        value={filter3}
        onChange={e => setFilter3(e.target.value)}
      />
      <input
        type="text"
        placeholder="Фильтр 4"
        value={filter4}
        onChange={e => setFilter4(e.target.value)}
      />
      <button onClick={handleFilterClick}>Применить фильтры</button>
    </div>
  );
}

export default FilterPanel;
