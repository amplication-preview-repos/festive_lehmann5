import * as graphql from "@nestjs/graphql";
import { CartItemResolverBase } from "./base/cartItem.resolver.base";
import { CartItem } from "./base/CartItem";
import { CartItemService } from "./cartItem.service";

@graphql.Resolver(() => CartItem)
export class CartItemResolver extends CartItemResolverBase {
  constructor(protected readonly service: CartItemService) {
    super(service);
  }
}
