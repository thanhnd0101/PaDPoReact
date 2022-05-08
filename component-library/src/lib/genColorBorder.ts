import { Status } from "../components/shared/types";

const COLOR_TABLE = {
  success: "border-green-300 focus:ring-green-500 focus:border-green-500",
  error: "border-rose-300 focus:ring-rose-500 focus:border-rose-500",
  warning: "border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500",
  default: "border-black focus:ring-black focus:border-black",
};

export default function genColorBorderFromStatus(status: Status) {
  return COLOR_TABLE[status];
}
