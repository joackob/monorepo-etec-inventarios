import { config } from "../../../config";

export const API_URI = config["api-uri"];
export const api = {
  items: `${API_URI}/api/items`,
};
