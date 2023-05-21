export const typeDefs = `#graphql
  type Coin {
    id: String
    symbol: String
    name: String
  }

  type CoinDetails {
    name: String
    usd: Float
    usd_market_cap: Float
    usd_24h_vol: Float
    usd_24h_change: Float
    last_updated_at: Int    
  }

  type CoinImages {
    thumb: String
    small: String    
  }

  type CoinHistory {
    id: String
    symbol: String
    name: String
    image: CoinImages
  }
  
  type Query {
    coins: [Coin]
    coinDetails(ids:[String]): [CoinDetails]
    coinHistory(id: String): CoinHistory
  }
`;
