import axios from "axios";
import { getMainAppHost } from "../../../lib/globalUtils";



export const listAccountsAsync = () => {
  return axios({
    method: "get",
    url: `${getMainAppHost}/api/accounts`,
  });
};
