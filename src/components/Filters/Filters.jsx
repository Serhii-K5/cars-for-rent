import React, { useState } from 'react';

const FilterPanel = ({ data, onFilter }) => {
  const [filterByDropdown1, setFilterByDropdown1] = useState('');
  const [filterByDropdown2, setFilterByDropdown2] = useState('');
  const [filterByInput1, setFilterByInput1] = useState('');
  const [filterByInput2, setFilterByInput2] = useState('');

  //нужно сохранить результат фильтра

  // const maxMileage = data.reduce((maxValue, currentValue) => {
  //   return currentValue.mileage > maxValue.mileage ? currentValue : maxValue;
  // }, data[0]);
  
  // const minMileage = data.reduce((maxValue, currentValue) => {
  //   return currentValue.mileage < maxValue.mileage ? currentValue : minValue;
  // }, data[0]); 
  
  const maxMileage = data.reduce((maxValue, currentValue) => {
    return currentValue.mileage > maxValue.mileage ? currentValue : maxValue;
  }, data[0]);
  
  const minMileage = data.reduce((maxValue, currentValue) => {
    return currentValue.mileage < maxValue.mileage ? currentValue : maxValue;
  }, data[0]); 

  const maxPrice = data.reduce((maxValue, currentValue) => {
    return currentValue.rentalPrice.slice(1) > maxValue.rentalPrice.slice(1) ? currentValue : maxValue;
  }, data[0]); 

  const minPrice = data.reduce((minValue, currentValue) => {
    return currentValue.rentalPrice.slice(1) < minValue.rentalPrice.slice(1) ? currentValue : minValue;
  }, data[0]); 

  const handleFilter = () => {
    // Фильтрация данных на основе выбранных или введенных значений
    const filteredData = data.filter(item => {
      const matchDropdown1 = filterByDropdown1 === '' || item.make === filterByDropdown1;
      const matchDropdown2 = filterByDropdown2 === '' || String(item.rentalPrice.slice(1)) === String(filterByDropdown2);
      const matchInput1 = filterByInput1 === '' || item.mileage - 5 === filterByInput1 || item.mileage - 5 > filterByInput1;
      const matchInput2 = filterByInput2 === '' || item.mileage + 5 === filterByInput1 || item.mileage + 5 < filterByInput1;

      return matchDropdown1 && matchDropdown2 && matchInput1 && matchInput2;
    });

    // Вызываем функцию обратного вызова для передачи отфильтрованных данных
    onFilter(filteredData);
  };

  const allBrandOption = () => {
    for(let i = minPrice; i < maxPrice; i += 10){
      <option value={i} />
    }
  }
  const allPriceOption = () => {
    for(let i = minPrice; i < maxPrice; i += 10){
      <option value={i} />
    }
  }

  return (
    <div style={{display: "flex"}}>
      <h2>Панель фильтров</h2>
      <div>
        <label>Car brand</label>
        <select onChange={e => setFilterByDropdown1(e.target.value)}>          
          {allBrandOption()}
          {/* <option value="">Выбрать все</option>
          <option value="значение1">Значение 1</option>
          <option value="значение2">Значение 2</option> */}
          {/* Добавьте другие варианты выбора, если необходимо */}
        </select>
      </div>
      <div>
        <label>Price/ 1 hour</label>
        <select onChange={e => setFilterByDropdown2(e.target.value)}>
          {allPriceOption()}
          {/* <option value="">Выбрать все</option>
          <option value="значениеA">Значение A</option>
          <option value="значениеB">Значение B</option> */}
          {/* Добавьте другие варианты выбора, если необходимо */}
        </select>
      </div>
      <div>
        <label>Сar mileage / km</label>
        <input
          type="text"
          // value={filterByInput1}
          value={filterByInput1 ? filterByInput1 : minMileage}
          onChange={e => setFilterByInput1(e.target.value)}
        />
      </div>
      <div>
        <label/>
        <input
          type="text"
          // value={filterByInput2}
          value={filterByInput2 ? filterByInput2 : maxMileage}
          onChange={e => setFilterByInput2(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default FilterPanel;