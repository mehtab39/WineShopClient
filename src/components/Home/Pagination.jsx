import styled from "styled-components";

export const Pagination = ({ page, setPage, totalPages }) => {
  var pageNumbers = [...Array(Math.ceil(+totalPages)).keys()].map((a) => a + 1);
  pageNumbers = ["Previous", ...pageNumbers, "Next"];
  const handleClick = (el) => {
    if (el == "Previous") return setPage(page - 1);
    if (el == "Next") return setPage(page + 1);
    return setPage(+el);
  };
  return (
    <>
      {totalPages > 0 && (
        <Div>
          {pageNumbers.map((el, key) => {
            return (
              <Button
                disabled={
                  (page == 1 && key == 0) ||
                  (page == totalPages && key == totalPages + 1)
                }
                onClick={() => handleClick(el)}
                key={key}
              >
                {el}
              </Button>
            );
          })}
        </Div>
      )}
    </>
  );
};
const Button = styled.button`
  padding: 13px;
  margin: 13px;
`;

const Div = styled.div`
  justify-content: center;
  text-align: center;
  min-width: 100vw;
`;
