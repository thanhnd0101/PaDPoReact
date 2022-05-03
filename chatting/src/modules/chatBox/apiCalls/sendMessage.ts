import axios from "axios";
import { getMainAppHost } from "../../../lib/globalUtils";

type SendMessageParams = {
  accountId: string;
  conversationId: string;
  text: string;
};

export const sendMessage = ({
  accountId,
  conversationId,
  text,
}: SendMessageParams) => {
  return axios({
    method: "post",
    url: `${getMainAppHost}/api/account/${accountId}/conversation/${conversationId}/messages`,
    data: {
      text,
    },
  });
};
