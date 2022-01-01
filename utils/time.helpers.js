import { formatDistanceToNowStrict } from "date-fns";

export function distanceToNow(dateTime) {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
}
