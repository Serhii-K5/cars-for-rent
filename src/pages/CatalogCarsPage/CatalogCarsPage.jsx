import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAdverts } from "redux/operations";

import CarCard from "components/CarCard/CarCard";
import { selectAdverts } from "redux/selectors";

import {
  Ul,
} from './CatalogCarsPage.styled';

import Footer from '../../components/Footer/Footer';

const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  return (
    <>
      {adverts.length > 0 && <Ul>
        {adverts.map((item) => (
          <li key={item.id}>
            <CarCard card={item} />
          </li>
        ))}
      </Ul>
      }
      <Footer />
    </>
  );
};

export default CatalogCarsPage;


