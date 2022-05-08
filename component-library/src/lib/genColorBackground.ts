import { Status } from "../components/shared/types";

const COLOR_TABLE = {
  success: "bg-green-300 focus:ring-green-500 focus:bg-green-500",
  error: "bg-rose-300 focus:ring-rose-500 focus:bg-rose-500",
  warning: "bg-yellow-300 focus:ring-yellow-500 focus:bg-yellow-500",
  default: "bg-indigo-100 focus:ring-indigo-500 focus:bg-indigo-500",
};
;

export default function genColorBackgroundFromStatus(status: Status) {
  return COLOR_TABLE[status];
}
