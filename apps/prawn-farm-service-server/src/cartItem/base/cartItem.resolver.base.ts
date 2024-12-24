/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CartItem } from "./CartItem";
import { CartItemCountArgs } from "./CartItemCountArgs";
import { CartItemFindManyArgs } from "./CartItemFindManyArgs";
import { CartItemFindUniqueArgs } from "./CartItemFindUniqueArgs";
import { DeleteCartItemArgs } from "./DeleteCartItemArgs";
import { CartItemService } from "../cartItem.service";
@graphql.Resolver(() => CartItem)
export class CartItemResolverBase {
  constructor(protected readonly service: CartItemService) {}

  async _cartItemsMeta(
    @graphql.Args() args: CartItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CartItem])
  async cartItems(
    @graphql.Args() args: CartItemFindManyArgs
  ): Promise<CartItem[]> {
    return this.service.cartItems(args);
  }

  @graphql.Query(() => CartItem, { nullable: true })
  async cartItem(
    @graphql.Args() args: CartItemFindUniqueArgs
  ): Promise<CartItem | null> {
    const result = await this.service.cartItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CartItem)
  async deleteCartItem(
    @graphql.Args() args: DeleteCartItemArgs
  ): Promise<CartItem | null> {
    try {
      return await this.service.deleteCartItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
