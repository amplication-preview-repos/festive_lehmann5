import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PrawnSeedServiceBase } from "./base/prawnSeed.service.base";

@Injectable()
export class PrawnSeedService extends PrawnSeedServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
