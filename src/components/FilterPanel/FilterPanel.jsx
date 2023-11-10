import React, { useState } from 'react';
import brandList from "../../assets/jsons/makes.json";
import {
  Container,
  Div,
  Select,
  Label,
  InputFrom,
  InputTo,
  DivInput,
  LabelTo,
  Button,
  ImgBrand,
  ImgPrice,
} from "./FilterPanel.styled";

import chevron from "assets/images/svg/chevron-down.svg";

const FilterPanel = ({ data, onFilter }) => {
  const [filterByDropdown1, setFilterByDropdown1] = useState('');
  const [filterByDropdown2, setFilterByDropdown2] = useState('');
  const [chevronRotation1, setCchevronRotation1] = useState(false);
  const [chevronRotation2, setCchevronRotation2] = useState(false);  
  const [filterByInput1, setFilterByInput1] = useState('');
  const [filterByInput2, setFilterByInput2] = useState('');

  const handleFilter = () => {
    const filteredData = data.filter(item => {
      const matchDropdown1 = filterByDropdown1 === '' || item.make === filterByDropdown1;
      const matchDropdown2 = filterByDropdown2 === '' || String(item.rentalPrice.slice(1)) === String(filterByDropdown2)
        || (String(Number(item.rentalPrice.slice(1))) > String(Number(filterByDropdown2)) && String(Number(item.rentalPrice.slice(1))) < String(Number(filterByDropdown2) + 10));
      const matchInput1 = filterByInput1 === '' || item.mileage === 0 + filterByInput1 || item.mileage > 0 + filterByInput1;
      const matchInput2 = filterByInput2 === '' || item.mileage === 0 + filterByInput2 || item.mileage < 0 + filterByInput2;

      return matchDropdown1 && matchDropdown2 && matchInput1 && matchInput2;
    });

    onFilter(filteredData);
  };

  const maxPrice = data.reduce((maxValue, currentValue) => {
    return +(currentValue.rentalPrice.slice(1)) > +(maxValue.rentalPrice.slice(1)) ? currentValue : maxValue;
  }, data[0]);
    
  const maxPrice1 = maxPrice !== undefined ? Number(maxPrice.rentalPrice.slice(1)) : 0; 

  const minPrice = data.reduce((minValue, currentValue) => {
      return Number(currentValue.rentalPrice.slice(1)) < Number(minValue) ? currentValue : minValue;
  }, data[0]);
  
  const minPrice1 = minPrice !== undefined ? Number(minPrice.rentalPrice.slice(1)) : 0;

  const priceArr = [];
  const allPriceOption = () => {
    if (maxPrice1 === 0 || priceArr[priceArr.length-1] === maxPrice1) return;
    for (let i = minPrice1; i <= maxPrice1; i += 10){
      if(priceArr.length === 0 || priceArr[priceArr.length-1] < i) priceArr.push(i)
    }
  }

  return (
    <Container>
      <Div>
        <Label>Car brand</Label>
        <Select onChange={e => setFilterByDropdown1(e.target.value)}
          style={{ width: "224px"}}
          placeholder={'Enter the text'}
          defaultValue={""}
          onClick={e => setCchevronRotation1(!chevronRotation1)}
        > 
          <option key={0} value={""}>{"Enter the text"}</option>  
          {brandList.length > 0 && brandList.map((item, index) => {
            return <option key={index+1} value={item}>{item}</option>
            })
          }        
        </Select>
        <ImgBrand
          src={chevron}
          alt="Chevron icon"
          style={chevronRotation1 ? {transform:"rotate(180deg)"} : {transform:"rotate(0deg)"}}
        />
      </Div>
      <Div>
        <Label>Price/ 1 hour</Label>
        <Select onChange={e => setFilterByDropdown2(e.target.value)}
          style={{ width: "125px" }}
          placeholder={'To $'}
          defaultValue={""}
          onClick={e => setCchevronRotation2(!chevronRotation2)}
        >
          <option key={0} value={0}>{'To $'}</option>
          {allPriceOption()}
          {priceArr.map((number) => (
            <option key={number} value={number}>
              {"$" + number}
            </option>
          ))}
        </Select>
        <ImgPrice
          src={chevron}
          alt="Chevron icon"
          style={chevronRotation2 ? {transform:"rotate(180deg)"} : {transform:"rotate(0deg)"}}
        />
      </Div>
      <DivInput>
        <Label>Сar mileage / km</Label>
        <InputFrom
          type="number"
          defaultValue={""}
          onChange={e => setFilterByInput1(e.target.value)}
          placeholder={'From'}
        />
      </DivInput>
      <DivInput>
        <LabelTo>to</LabelTo>
        <InputTo
          type="number"
          defaultValue={filterByInput2}
          onChange={e => setFilterByInput2(e.target.value)}
          placeholder={'To'}
        />
      </DivInput>
      <Button onClick={handleFilter}>Search</Button>
    </Container>
  );
};

export default FilterPanel;
