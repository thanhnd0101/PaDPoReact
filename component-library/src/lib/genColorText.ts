import { Status } from "../components/shared/types";

const COLOR_TABLE = {
  success: "text-green-700",
  error: "text-rose-700",
  warning: "text-yellow-700",
  default: "text-black",
};

export default function genColorTextFromStatus(status: Status) {
  return COLOR_TABLE[status];
}
