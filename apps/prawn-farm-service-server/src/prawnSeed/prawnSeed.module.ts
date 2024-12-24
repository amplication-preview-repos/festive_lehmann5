import { Module } from "@nestjs/common";
import { PrawnSeedModuleBase } from "./base/prawnSeed.module.base";
import { PrawnSeedService } from "./prawnSeed.service";
import { PrawnSeedController } from "./prawnSeed.controller";
import { PrawnSeedResolver } from "./prawnSeed.resolver";

@Module({
  imports: [PrawnSeedModuleBase],
  controllers: [PrawnSeedController],
  providers: [PrawnSeedService, PrawnSeedResolver],
  exports: [PrawnSeedService],
})
export class PrawnSeedModule {}
