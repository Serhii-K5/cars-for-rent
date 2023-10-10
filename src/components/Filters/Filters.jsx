import React, { useState } from 'react';
import brandList from "../../assets/jsons/makes.json";

const FilterPanel = ({ data, onFilter }) => {
  const [filterByDropdown1, setFilterByDropdown1] = useState('');
  const [filterByDropdown2, setFilterByDropdown2] = useState('');
  const [filterByInput1, setFilterByInput1] = useState('');
  const [filterByInput2, setFilterByInput2] = useState('');

  const handleFilter = () => {
    // Фильтрация данных на основе выбранных или введенных значений
    const filteredData = data.filter(item => {
      // const matchDropdown1 = filterByDropdown1 === '' || item.field1 === filterByDropdown1;
      // const matchDropdown2 = filterByDropdown2 === '' || item.field2 === filterByDropdown2;
      // const matchInput1 = filterByInput1 === '' || item.field3.includes(filterByInput1);
      // const matchInput2 = filterByInput2 === '' || item.field4.includes(filterByInput2);
      const matchDropdown1 = filterByDropdown1 === '' || item.make === filterByDropdown1;
      const matchDropdown2 = filterByDropdown2 === '' || String(item.rentalPrice.slice(1)) === String(filterByDropdown2);
      const matchInput1 = filterByInput1 === '' || item.mileage - 5 === filterByInput1 || item.mileage - 5 > filterByInput1;
      const matchInput2 = filterByInput2 === '' || item.mileage + 5 === filterByInput1 || item.mileage + 5 < filterByInput1;

      return matchDropdown1 && matchDropdown2 && matchInput1 && matchInput2;
    });

    // Вызываем функцию обратного вызова для передачи отфильтрованных данных
    onFilter(filteredData);
  };

  const maxPrice = data.reduce((maxValue, currentValue) => {
    return currentValue.rentalPrice.slice(1) > maxValue.rentalPrice.slice(1) ? currentValue : maxValue;
  }, data[0]); 

  const minPrice = data.reduce((minValue, currentValue) => {
    return currentValue.rentalPrice.slice(1) < minValue.rentalPrice.slice(1) ? currentValue : minValue;
  }, data[0]);

  const maxMileage = data.reduce((maxValue, currentValue) => {
    return currentValue.mileage > maxValue.mileage ? currentValue : maxValue;
  }, data[0]);
  
  const minMileage = data.reduce((maxValue, currentValue) => {
    return currentValue.mileage < maxValue.mileage ? currentValue : maxValue;
  }, data[0]);

  const priceArr = [];
  const allPriceOption = () => {
    for (let i = minPrice; i < maxPrice; i += 10){
      priceArr.push(i)
    }
  }

  return (
    <div>
      <div>
        <label>Car brand</label>
        <select onChange={e => setFilterByDropdown1(e.target.value)}>          
          {brandList.length > 0 && brandList.map((item) => {
              return <option value={item} />
            })
          }        
        </select>
      </div>
      <div>
        <label>Price/ 1 hour</label>
        <select onChange={e => setFilterByDropdown2(e.target.value)}>
          {allPriceOption()}
          {priceArr.map((item) => 
            <option value={item} />
          )}
        </select>
      </div>
      <div>
        <label>Сar mileage / km</label>
        <input
          type="text"
          value={filterByInput1 ? filterByInput1 : minMileage}
          onChange={e => setFilterByInput1(e.target.value)}
        />
      </div>
      <div>
        <label/>
        <input
          type="text"
          value={filterByInput2 ? filterByInput2 : maxMileage}
          onChange={e => setFilterByInput2(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Search</button>
    </div>
  );
};

export default FilterPanel;
