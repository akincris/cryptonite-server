import { getCoinData } from "../utils/cryptoAPI";

const resolvers = {
  Query: {
    coins:async () => {
        const response = await getCoinData("list");
console.log(response)
        return response;
    }
}
};

export default resolvers;
