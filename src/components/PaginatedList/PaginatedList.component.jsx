import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import CountryCard from "../CountryCard/CountryCard.component";
import PLFragment from "./PaginatedList.styles";

const PaginatedList = ({ itemsPerPage, items, Wrapper, reactTo }) => {
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [page, setPage] = useState();

  const countryCards = currentItems.map((el, index) => {
    return <CountryCard offSetAnimation={index} key={el.name} country={el} />;
  });

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items, reactTo]);

  const handlePageClick = (event) => {
    setPage(event.selected);
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    setPage(0);
    const newOffset = (0 * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  }, [reactTo]);

  return (
    <PLFragment>
      <Wrapper>{countryCards}</Wrapper>
      <ReactPaginate
        breakLabel="..."
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
        forcePage={page}
        onPageChange={handlePageClick}
      />
    </PLFragment>
  );
};

export default PaginatedList;
