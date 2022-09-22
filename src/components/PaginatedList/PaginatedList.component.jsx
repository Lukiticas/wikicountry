import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CountryCard from "../CountryCard/CountryCard.component";
import PLFragment from "./PaginatedList.styles";

const PaginatedList = ({ itemsPerPage, items, Wrapper }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const countryCards = currentItems.map((el, index) => {
    return <CountryCard offSetAnimation={index} key={el.name} country={el} />;
  });

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <PLFragment>
      <Wrapper>{countryCards}</Wrapper>
      <ReactPaginate
        breakLabel="..."
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        nextLabel=">"
        className="pag"
        pageClassName="pag__page"
        pageLinkClassName="pag__link"
        activeClassName="pag__pag-active"
        activeLinkClassName="pag__pag-active--link"
        previousClassName="pag__previous-button"
        nextClassName="pag__next-button"
      />
    </PLFragment>
  );
};

export default PaginatedList;
