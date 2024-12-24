/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CartItemService } from "../cartItem.service";
import { CartItemCreateInput } from "./CartItemCreateInput";
import { CartItem } from "./CartItem";
import { CartItemFindManyArgs } from "./CartItemFindManyArgs";
import { CartItemWhereUniqueInput } from "./CartItemWhereUniqueInput";
import { CartItemUpdateInput } from "./CartItemUpdateInput";

export class CartItemControllerBase {
  constructor(protected readonly service: CartItemService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CartItem })
  async createCartItem(
    @common.Body() data: CartItemCreateInput
  ): Promise<CartItem> {
    return await this.service.createCartItem({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CartItem] })
  @ApiNestedQuery(CartItemFindManyArgs)
  async cartItems(@common.Req() request: Request): Promise<CartItem[]> {
    const args = plainToClass(CartItemFindManyArgs, request.query);
    return this.service.cartItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async cartItem(
    @common.Param() params: CartItemWhereUniqueInput
  ): Promise<CartItem | null> {
    const result = await this.service.cartItem({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCartItem(
    @common.Param() params: CartItemWhereUniqueInput,
    @common.Body() data: CartItemUpdateInput
  ): Promise<CartItem | null> {
    try {
      return await this.service.updateCartItem({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CartItem })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCartItem(
    @common.Param() params: CartItemWhereUniqueInput
  ): Promise<CartItem | null> {
    try {
      return await this.service.deleteCartItem({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
