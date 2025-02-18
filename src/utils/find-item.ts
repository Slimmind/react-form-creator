import { ItemType } from "./constants";

export const findItem = (obj: ItemType, id: string) => {
  if (obj.id === id) {
    return obj;
  }
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      const result = findItem(obj[key], id);
      if (result) {
        return result;
      }
    }
  }
  return null;
};