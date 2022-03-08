import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/action/dataAction";
import { Header } from "../Header/Header";
import { DataContainer } from "./DataContainer";
import { Pagination } from "./Pagination";
import "./Home.css";

export const Home = ($) => {
  const [order, setOrder] = useState(false);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  const { error, errorMessage, data, loading } = useSelector((state) => ({
    error: state.dataState.error,
    errorMessage: state.dataState.errorMessage,
    data: state.dataState.data,
    loading: state.dataState.loading
  }));

  useEffect(
    ($) => {
      dispatch(fetchData(order, page));
    },
    [order, page]
  );
  return (
    <>
      <Header />
      <button
        id="sortBtn"
        onClick={() => {
          setOrder(!order);
        }}
      >
        Sort by rating
      </button>
      {data ? (
        <DataContainer data={data.wine} />
      ) : (
        <p>Loading more wines are coming...</p>
      )}
      {data && (
        <Pagination
          totalPages={data.totalPages}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  );
};
