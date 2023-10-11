import { useSelector } from "react-redux";
import { selectFavorites } from "redux/selectors";
// import CardModal from "components/CardModal/CardModal";
import CarCard from "components/CarCard/CarCard";


import {
  Div,
  H3,
  H4,
} from './FavoritesPage.styled';

import {
  Ul
} from "pages/CatalogCarsPage/CatalogCarsPage.styled";

const FavoritesPage = () => {
  const favoriteAdverts = useSelector(selectFavorites);
  
  return favoriteAdverts.length > 0 ? (
    <Ul>
      {favoriteAdverts.map((item) => (
        <li key={item.id}>
          <CarCard card={item} />
        </li>
      ))}
    </Ul>
  ) : (
    <Div>
      <H3>No cars selected.</H3>
      <H4>Go to the "Catalog" page and make a selection.</H4>      
    </Div>  
  )  
};

export default FavoritesPage;
