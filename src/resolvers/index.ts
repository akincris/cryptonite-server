import {
  getCoinData,
  getCoinHistory,
  getCurrencyDetails,
} from "../utils/cryptoAPI.js";
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
    coinDetails: async (_: any, { ids }: any, context: any) => {
      const coinIds = ids.join("%2C");
      const response = getCurrencyDetails(coinIds)
        .then(async (res) => {
          const r = await res.json();
          const formattedResult = Object.keys(r).map((k, i) => {
            return { name: k, ...r[k] };
          });
          return formattedResult;
        })
        .catch((error) => {
          console.log("error");
        });
      return response;
    },
    coinHistory: async (_: any, { id }: any, context: any) => {
      const response = getCoinHistory(id)
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
