import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
// import CardModal from "components/CardModal/CardModal";
import CarCard from "components/CarCard/CarCard";


// import {
//   H1
// } from './FavoritesPage.styled';
import {
  Ul
} from "pages/CatalogCarsPage/CatalogCarsPage.styled";

// import Footer from '../../components/Footer/Footer';

const FavoritesPage = ({card}) => {
  // const dispatch = useDispatch();
  const favoriteAdverts = useSelector(selectFavorites);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const dataFiltered = favoriteAdverts.filter(
      (favorite) => favorite.id === card.id
    );

    setFilteredData(dataFiltered);
    
  }, [card, favoriteAdverts]);

  return (
    <>
      {filteredData.length > 0 && <Ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            <CarCard card={item} />
          </li>
        ))}
      </Ul>
      }
    </>
  );
  // return (
  //   <>
  //     <H1>FavoritesPage</H1>

  //     {/* <Footer /> */}
  //   </>
  // );
};

export default FavoritesPage;
