import axios from "axios";

export const GetNews = async (query) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=eb64ffae75e2459b851437ba90286efe`
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}