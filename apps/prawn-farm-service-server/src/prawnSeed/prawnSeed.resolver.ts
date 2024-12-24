import * as graphql from "@nestjs/graphql";
import { PrawnSeedResolverBase } from "./base/prawnSeed.resolver.base";
import { PrawnSeed } from "./base/PrawnSeed";
import { PrawnSeedService } from "./prawnSeed.service";

@graphql.Resolver(() => PrawnSeed)
export class PrawnSeedResolver extends PrawnSeedResolverBase {
  constructor(protected readonly service: PrawnSeedService) {
    super(service);
  }
}
