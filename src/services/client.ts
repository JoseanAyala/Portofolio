import axios from "axios";
import { useContext } from "react";
import { UserContext } from "src/store/userContext";

type clientReponse = [any | undefined, any | undefined];

const checkLocalHostIsOnline = async () => {
  try {
    const response = await fetch("http://localhost:8080");
    return response.status === 200;
  } catch (error) {
    return false;
  }
};

const baseUrl = (await checkLocalHostIsOnline())
  ? "http://localhost:8080"
  : "https://gojayala.onrender.com";

export default () => {
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
};
