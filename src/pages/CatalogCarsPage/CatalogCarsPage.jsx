import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "redux/operations";

import CarCard from "components/CarCard/CarCard";
import { selectAdverts } from "redux/selectors";

import {
  Ul,
} from './CatalogCarsPage.styled';

// import Footer from '../../components/Footer/Footer';
import FilterPanel from './FilterPanel';

const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [filteredData, setFilteredData] = useState(adverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleFilter = filteredData => {
    setFilteredData(filteredData);
  };

  return (
    <>
      <FilterPanel data={adverts} onFilter={handleFilter} />      
      {filteredData.length > 0 && <Ul>
        {adverts.map((item) => (
          <li key={item.id}>
            <CarCard card={item} />
          </li>
        ))}
      </Ul>
      }
      {/* {adverts.length > 0 && <Ul>
        {adverts.map((item) => (
          <li key={item.id}>
            <CarCard card={item} />
          </li>
        ))}
      </Ul>
      } */}
      {/* <Footer /> */}
    </>
  );
};

export default CatalogCarsPage;


