import { connectAPI } from "./connectAPI";

export const login = async ({ username, password }) => {
  const data = await connectAPI("login", "post", { username, password });

  console.log(data);
};
