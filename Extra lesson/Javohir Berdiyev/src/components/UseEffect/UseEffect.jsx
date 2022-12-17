import React, { useEffect, useState } from "react";
import { customFetch } from "./customFetch";
import Paging from "./Paging";
import UseEffectUser from "./UseEffectUser";

function UseEffect() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, settoTalPage] = useState(1);

  useEffect(() => {
    customFetch(currentPage).then(({ data, page, total_pages }) => {
      setData(data);
      setCurrentPage(page);
      settoTalPage(total_pages);
    });
  }, [currentPage]);

  return (
    <div>
      <Paging curr={currentPage} total={totalPage} setCurr={setCurrentPage} />
      <UseEffectUser data={data} />
    </div>
  );
}

export default UseEffect;
