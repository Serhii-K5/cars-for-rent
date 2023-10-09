import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "redux/operations";

import CarCard from "components/CarCard/CarCard";
import { selectAdverts } from "redux/selectors";

import {
  // H1,
  Ul,
} from './CatalogCarsPage.styled';



const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {/* <H1>CatalogCarsPage</H1> */}
      
      {adverts.length > 0 && <Ul>
        {adverts.map((item) => (
          <li key={item.id}>
            <CarCard card={item} />
          </li>
        ))}
      </Ul>
      }
    </>
  );
};

export default CatalogCarsPage;


