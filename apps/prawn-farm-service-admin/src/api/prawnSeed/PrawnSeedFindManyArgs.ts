import { PrawnSeedWhereInput } from "./PrawnSeedWhereInput";
import { PrawnSeedOrderByInput } from "./PrawnSeedOrderByInput";

export type PrawnSeedFindManyArgs = {
  where?: PrawnSeedWhereInput;
  orderBy?: Array<PrawnSeedOrderByInput>;
  skip?: number;
  take?: number;
};
