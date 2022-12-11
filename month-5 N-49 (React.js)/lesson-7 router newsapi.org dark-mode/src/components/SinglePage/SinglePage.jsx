import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../../lib/axios";
import SpecialCharacter from "../../lib/SpecialCharacter";

function SinglePage(data) {
  const [singleData, setsingleData] = useState([]);
  // const [finData, setfinData] = useState([]);
  const { url, slug } = useParams();
  // console.log(slug);

  // useEffect(() => {
  //   axios
  //     .get(`${url}&apiKey=eb64ffae75e2459b851437ba90286efe`)
  //     .then(({ data }) => setsingleData(data.articles));
  // }, [url]);

  // useEffect(() => {
  // }, [singleData, slug]);
  // singleData(
  //   singleData.find(
  //     (data) => SpecialCharacter(data.title.toLowerCase()) === slug
  //   )
  // );

  console.log(data);

  return (
    <>
      <section className="aboutPage-section">
        <div className="container">
          <div className="aboutPage">{singleData.title}</div>
        </div>
      </section>
    </>
  );
}

export default SinglePage;
