import a from "axios";

const axios = a.create({
  baseURL: `https://newsapi.org/v2/everything?q=`,
});

export default axios;
