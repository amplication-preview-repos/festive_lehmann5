import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PrawnSeedService } from "./prawnSeed.service";
import { PrawnSeedControllerBase } from "./base/prawnSeed.controller.base";

@swagger.ApiTags("prawnSeeds")
@common.Controller("prawnSeeds")
export class PrawnSeedController extends PrawnSeedControllerBase {
  constructor(protected readonly service: PrawnSeedService) {
    super(service);
  }
}
