import axios from "axios";
import { getMainAppHost } from "../../../lib/globalUtils";

type ListMessagesOfParams = {
  accountId: string;
  conversationId: string;
  cursor?: string;
  pageSize?: number;
};

export const listMessagesOf = ({
  accountId,
  conversationId,
  pageSize = 10,
  cursor,
}: ListMessagesOfParams) => {
  const pageSizeParam = `?pageSize=${pageSize}`;
  const cursorParam = cursor ? `&cursor=${cursor}` : "";
  return axios({
    method: "get",
    url: `${getMainAppHost}/api/account/${accountId}/conversation/${conversationId}/messages${pageSizeParam}${cursorParam}`,
  });
};
