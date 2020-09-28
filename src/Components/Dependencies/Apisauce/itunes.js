import { create } from "apisauce";

const api = create({
  baseURL: "https://itunes.apple.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});
const callAPI = async (searchString) => {
  const data = await api.get(`/search?term=${searchString}`);
  return data.data;
};
export default callAPI;
