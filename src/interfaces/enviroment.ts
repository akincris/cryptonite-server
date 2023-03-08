interface Environment {
  DB_HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
}

export const environment: Environment = {
  DB_HOST: process.env.DB_HOST || "",
  DB_NAME: process.env.DB_NAME || "",
  DB_USER: process.env.DB_USER || "",
  DB_PASSWORD: process.env.DB_PASSWORD || "",
};
