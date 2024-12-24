import { PrawnSeed as TPrawnSeed } from "../api/prawnSeed/PrawnSeed";

export const PRAWNSEED_TITLE_FIELD = "id";

export const PrawnSeedTitle = (record: TPrawnSeed): string => {
  return record.id?.toString() || String(record.id);
};
