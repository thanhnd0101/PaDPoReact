import axios from "axios";
import { getMainAppHost } from "../../../lib/globalUtils";

type ListConversationsOfParams = {
  accountId: string;
};

export const listConversationsOf = ({
  accountId,
}: ListConversationsOfParams) => {
  return axios({
    method: "get",
    url: `${getMainAppHost}/api/account/${accountId}/conversations`,
  });
};
