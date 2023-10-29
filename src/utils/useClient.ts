import axios from "axios";
import { useContext } from "react";
import { UserContext } from "src/utils/userContext";

type clientReponse = [any | undefined, any | undefined];

export default function useClient() {
  const url = {
    local: "http://localhost:8080",
    production: "https://gojayala.onrender.com",
  };

  const baseUrl = url.production;
  const userContext = useContext(UserContext);
  const headers = { Authorization: `Bearer ${userContext?.user?.token || ""}` };

  const get = async (url: string): Promise<clientReponse> => {
    const response = await axios.get(url, { headers });
    return response.data;
  };

  const post = async (url: string, data: any): Promise<clientReponse> => {
    const response = await axios.post(url, data, { headers });
    return response.data;
  };

  const put = async (url: string, data: any): Promise<clientReponse> => {
    const response = await axios.put(url, data, { headers });
    return response.data;
  };

  const del = async (url: string): Promise<clientReponse> => {
    const response = await axios.delete(url, { headers });
    return response.data;
  };

  return { get, post, put, del, baseUrl };
}
