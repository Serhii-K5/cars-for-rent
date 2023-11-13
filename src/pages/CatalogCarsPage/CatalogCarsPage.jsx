import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchAdverts } from "redux/operations";

import CarCard from "components/CarCard/CarCard";
import { selectAdverts } from "redux/selectors";

import {
  Ul,
  // Button,  // V1 - пагінація з додаванням елементів по натисканню кнопки
  DivShift,   // V2 - пагінація з заміщенням елементів
  DivPagination,  // V2 - пагінація з заміщенням елементів
  DivPage,    // V2 - пагінація з заміщенням елементів
} from './CatalogCarsPage.styled';

import FilterPanel from 'components/FilterPanel/FilterPanel';


// V1 - пагінація з додаванням елементів по натисканню кнопки
// const CatalogCarsPage = () => {
//   const dispatch = useDispatch();
//   const adverts = useSelector(selectAdverts);
//   const [filteredData, setFilteredData] = useState(adverts);

//   const [activePage, setActivePage] = useState(0);
//   const [activeFilter, setActiveFilter] = useState(false);
  
//   useEffect(() => {
//     dispatch(fetchAdverts());
//   }, [dispatch]);

//   const handleFilter = filteredData => {
//     setActiveFilter(true);
//     setActivePage(0);
//     setFilteredData(filteredData);
//   };

//   const onClickPagination = () => {
//     // setPaginationArray(filteredData.slice(activePage, activePage + 8));
//     setActivePage(activePage + 8);
//   }

//   return (
//     <div style={{ padding: '50px' }}>
//       <FilterPanel data={adverts} onFilter={handleFilter} />
//       {filteredData.length === 0 && adverts.length > 0 && !activeFilter && setFilteredData(adverts)}
//       {filteredData.length > 0 && (
//         <Ul>
//           {filteredData.map((item, index) => (            
//             index < activePage + 8 && <li key={item.id}>
//               <CarCard card={item} />
//             </li>
//           ))};
//         </Ul>
//       )}
//       <Button
//         onClick={onClickPagination}
//         style={activePage + 8 > filteredData.length ? {display: "none"} : {display: "block"}}
//       >
//         Load more
//       </Button>
//     </div>
//   );
// };

// export default CatalogCarsPage;


// V2 - пагінація з заміщенням елементів
const CatalogCarsPage = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const [filteredData, setFilteredData] = useState(adverts);

  const [activePage, setActivePage] = useState(0);
  const [activeFilter, setActiveFilter] = useState(false);
  // const [activeFilter, setActiveFilter] = useState(false);

  
  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const handleFilter = filteredData => {
    setActiveFilter(true);
    setActivePage(0);
    setFilteredData(filteredData);
  };

  const onClickIncrease  = () => {
    activePage < filteredData.length / 8 && setActivePage(activePage + 1);
  };
  
  const onClickDecrease  = () => {
    activePage > 0 && setActivePage(activePage - 1);
  };
  
  // const onClickButton1  = () => {
  //   activePage > 0 && setActivePage(activePage - 1);
  // };
  
  // const onClickButton2  = () => {
  //   activePage > 0 && setActivePage(activePage - 1);
  // };
  
  // const onClickButton3  = () => {
  //   activePage > 0 && setActivePage(activePage - 1);
  // };
  
  // const onClickButton4  = () => {
  //   activePage > 0 && setActivePage(activePage - 1);
  // };



  return (
    <div style={{ padding: '50px' }}>
      <FilterPanel data={adverts} onFilter={handleFilter} />
      {filteredData.length === 0 && adverts.length > 0 && !activeFilter && setFilteredData(adverts)}
      {filteredData.length > 0 && (
        <Ul>
          {filteredData.map((item, index) => (            
            index < activePage * 8 && <li key={item.id}>
              <CarCard card={item} />
            </li>
          ))};
        </Ul>
      )}
      <DivPagination>
        {activePage > 0 && <DivShift onClick={onClickDecrease}>{"<<"}</DivShift>}
        {/* {activePage > 0 && <DivPage onClick={onClickDecrease} style={activePage > 0 && {backgroundColor: 'green'}}>{activePage}</DivPage>} */}
        {activePage > 0 && <DivPage onClick={onClickDecrease}>{activePage}</DivPage>}
        <DivPage>{activePage + 1}</DivPage>
        {filteredData.length / 8 > activePage + 1 && <DivPage onClick={onClickIncrease}>{activePage + 2}</DivPage>}
        {filteredData.length / 8 > activePage + 2 && <DivPage>{"..."}</DivPage>}     
        <DivPage onClick={onClickIncrease}>{filteredData.length / 8}</DivPage>     
        {filteredData.length / 8 > activePage + 2 && <DivShift onClick={onClickIncrease} >{">>"}</DivShift>}
      </DivPagination>
    </div>
  );
};

export default CatalogCarsPage;





// import {
//   fetchDataWithPagination,
//   selectData,
// } from "./redux/dataSlice";

// const CatalogCarsPage = () => {
//   const dispatch = useDispatch();
//   const data = useSelector(selectData);
//   const adverts = useSelector(selectAdverts);
//   const [filteredData, setFilteredData] = useState(adverts);
//   const [activePage, setActivePage] = useState(0);
//   const limit = 8;
  
//   useEffect(() => {
//     dispatch(fetchAdverts());
//   }, [dispatch]);

//   useEffect(() => {
//     // Вызовите fetchDataWithPagination с параметрами page и limit
//     dispatch(fetchDataWithPagination({ page: activePage + 1, limit }));
//   }, [activePage]);

//   const handleFilter = filteredData => {
//     setFilteredData(filteredData);
//   };
  
//   const onClickIncrease  = () => {
//     setActivePage(activePage + 1);
//   };
  
//   const onClickDecrease  = () => {
//     setActivePage(activePage + 1);
//   };

//   return (
//     <div style={{ padding: '50px' }}>
//       <FilterPanel data={adverts} onFilter={handleFilter} />
//       {filteredData.length > 0 && (
//         <Ul>
//           {filteredData.map(item => (
//             <li key={item.id}>
//               <CarCard card={item} />
//             </li>
//           ))}
//         </Ul>
//       )}
//       {filteredData.length === 0 && adverts.length > 0 && (
//         <Ul>
//           {data.map(item => (
//             <li key={item.id}>
//               <CarCard card={item} />
//             </li>
//           ))}
//         </Ul>
//       )}
//       {activePage > 0 && <div onClick={onClickDecrease}>{"<<"}</div>}
//       {activePage > 0 && <div onClick={onClickDecrease} style={{border: "2px solid #000"}}>{activePage}</div>}
//       <div style={{border: "2px solid #000"}}>{activePage + 1}</div>
//       {adverts.length > activePage + 1 && <div onClick={onClickIncrease} style={{border: "2px solid #000"}}>{activePage + 2}</div>}
//       {adverts.length > activePage + 2 && <div>{"..."}</div>}     
//       <div onClick={onClickIncrease} style={{border: "2px solid #000"}}>{adverts.length}</div>     
//       {adverts.length > activePage + 3 && <div onClick={onClickIncrease} >{">>"}</div>}
//     </div>
//   );
// };

// export default CatalogCarsPage;
