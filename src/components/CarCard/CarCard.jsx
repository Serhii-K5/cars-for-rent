import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "redux/sliceFavorite";
import { selectFavorites } from "redux/selectors";
import CardModal from "components/CardModal/CardModal";
import {
  Container,
  FavoriteBtn,
  Img,
  Title,
  RentalPrice,
  TitleContainer,
  Span,
  Year,
  Ul,
  Li,
  Button,
} from "./CarCard.styled";

import HeartActive from "assets/images/svg/heart-active.svg";
import Heart from "assets/images/svg/heart.svg";

export default function Advert({ card }) {
  const dispatch = useDispatch();
  const favoriteAdverts = useSelector(selectFavorites);
  const [isModalShown, setIsModalShown] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isCurrentFavorite = favoriteAdverts.find(
      (favorite) => favorite.id === card.id
    );
    if (isCurrentFavorite) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [card, favoriteAdverts]);

  
  const onCloseModal = () => {
    setIsModalShown(false);
  };

  const onAdd = () => {
    dispatch(addFavorites(card));
    setIsFavorite(true);
  };

  const onDelete = () => {
    dispatch(deleteFavorites(card.id));
    setIsFavorite(false);
  };
  
  const addressCity = (address) => {
    const addressArr = address.split(', ');
    return addressArr[1];
  };
  
  const addressCountry = (address) => {
    const addressArr = address.split(', ');
    return addressArr[2];
  };
  
  const onOpenModal = () => {
    setIsModalShown(true);
  };
  
  return (
    <>
      <Container>
        {isFavorite ? (
          <FavoriteBtn onClick={onDelete}>
            <img src={HeartActive} alt="favorite button" />
          </FavoriteBtn>
        ) : (
          <FavoriteBtn onClick={onAdd}>
            <img src={Heart} alt="favorite button" />
          </FavoriteBtn>
        )}

        <div>
          <Img src={card.img} alt={card.model} />
          <TitleContainer>
            <Title>
              {card.make}
              <Span>{card.model}</Span>,
              <Year>{card.year}</Year>
            </Title>
            <RentalPrice>{card.rentalPrice}</RentalPrice>
          </TitleContainer>
          <Ul>
            <Li>{addressCity(card.address)}</Li>
            <Li>{addressCountry(card.address)}</Li>
            <Li>{card.rentalCompany}</Li>
          </Ul>
          <Ul style={{ marginBottom: 0 }}>
            <Li>{card.type}</Li>
            <Li>{card.mileage}</Li>
            <Li
              style={{
                overflow: "hidden",
                whiteSpace: "wrap",
                textOverflow: "ellipsis",
              }}
            >
              {card.accessories[0]}
            </Li>
          </Ul>
        </div>
        <Button type="button" onClick={onOpenModal}>
          Learn more
        </Button>
      </Container>
      {isModalShown && <CardModal card={card} onClose={onCloseModal} />}
    </>
  );
}