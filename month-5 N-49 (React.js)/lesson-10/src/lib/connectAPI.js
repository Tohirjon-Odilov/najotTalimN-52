export const connectAPI = async (path, method, body = null) => {
  const params = {
    method,
    headers: {
      "content-type": "application/json",
    },
  };

  if (body) {
    params.body = JSON.stringify(body);
  }

  const rawData = await fetch(
    `https://pressa-exem.herokuapp.com/${path}`,
    params
  );

  return await rawData.json();
};
