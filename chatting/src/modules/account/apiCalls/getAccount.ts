import axios from "axios";
import { getMainAppHost } from "../../../lib/globalUtils";

export const getAccountAsync = ({ id }: { id: string }) => {
  return axios({
    method: "get",
    url: `${getMainAppHost}/api/account/${id}`,
  });
};
