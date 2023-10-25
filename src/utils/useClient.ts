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
    try {
      const response = await axios.get(url, { headers });
      return [response.data, undefined];
    } catch (error: any) {
      return [undefined, error.message];
    }
  };

  const post = async (url: string, data: any): Promise<clientReponse> => {
    try {
      const response = await axios.post(url, data, { headers });
      return [response.data, undefined];
    } catch (error: any) {
      return [undefined, error.message];
    }
  };

  const put = async (url: string, data: any): Promise<clientReponse> => {
    try {
      const response = await axios.put(url, data, { headers });
      return [response.data, undefined];
    } catch (error: any) {
      return [undefined, error.message];
    }
  };

  const del = async (url: string): Promise<clientReponse> => {
    try {
      const response = await axios.delete(url, { headers });
      return [response.data, undefined];
    } catch (error: any) {
      return [undefined, error.message];
    }
  };

  return { get, post, put, del, baseUrl };
}
