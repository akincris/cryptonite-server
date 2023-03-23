import { getCoinData } from "../utils/cryptoAPI.js";
export const resolvers = {
  Query: {
    coins: async () => {
      const response = getCoinData("list")
        .then(async (res) => {
          const r = await res.json();
          return r;
        })
        .catch((error) => {
          console.log("error");
        });
      return response;
    },
  },
};
