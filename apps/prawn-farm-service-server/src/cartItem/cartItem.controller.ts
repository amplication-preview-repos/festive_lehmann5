import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CartItemService } from "./cartItem.service";
import { CartItemControllerBase } from "./base/cartItem.controller.base";

@swagger.ApiTags("cartItems")
@common.Controller("cartItems")
export class CartItemController extends CartItemControllerBase {
  constructor(protected readonly service: CartItemService) {
    super(service);
  }
}
