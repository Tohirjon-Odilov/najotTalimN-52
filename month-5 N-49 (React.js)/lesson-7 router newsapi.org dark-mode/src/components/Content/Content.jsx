import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import axios from "../../lib/axios";
import SpecialCharacter from "../../lib/SpecialCharacter";
import SinglePage from "../SinglePage/SinglePage";
import st from "./Content.module.scss";

const Content = ({ id = 0 }) => {
  const { url, slug } = useParams();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${url}&apiKey=eb64ffae75e2459b851437ba90286efe`)
      .then(({ data }) => {
        setInfo(data.articles);
        SinglePage(data.articles)
      });
  }, [url]);

  return (
    <>
      <div className="d-flex mt-3 flex-wrap">
        {info.map((news, index) => (
          <Link
            key={index}
            to={SpecialCharacter(news.title.toLowerCase())}
            style={{ width: "400px" }}
            className="card me-2 mb-2"
          >
            <div className={st.wrapper}>
              <img src={news?.urlToImage} width="100%" height="100%" alt="" />
            </div>
            <div className="card-body">
              <h3 className="card-title">{news.title}</h3>
              <p className="card-text">{news.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Content;
