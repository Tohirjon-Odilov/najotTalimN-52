import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { GetNews } from "../../lib/GetNews";
import SpecialCharacter from "../../lib/SpecialCharacter";
import SinglePage from "../SinglePage/SinglePage";
import st from "./Content.module.scss"

const Content = ({ id = 0 }) => {
  const { url } = useParams()
  const [info, setInfo] = useState([])

  const handleNews = async (link) => {
    const { articles } = await GetNews(link)
    setInfo(articles);
    SinglePage(articles)
  }

  useEffect(() => {
    handleNews(url)
  }, [url])



  // console.log(info[0].title.replace(new RegExp(/[^A-z\s\d][\\^]?/g), ""));

  return (
    <>
      <div className="d-flex mt-3 flex-wrap">
        {
          info.map((news) => (
            <Link key={id++} to={SpecialCharacter(news.title.toLowerCase())} style={{ "width": "400px" }} className="card me-2 mb-2">
              <div className={st.wrapper}>
                <img src={news.urlToImage} width="100%" height="100%" alt="" />
              </div>
              <div className="card-body">
                <h3 className="card-title">{news.title}</h3>
                <p className="card-text">{news.description}</p>
              </div>
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default Content;