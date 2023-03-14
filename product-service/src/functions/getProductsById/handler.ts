import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";
import { product } from "src/data/product";
import { formatResponse } from "src/utils/formatRespons";

import schema from "./schema";

const getProductsById: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event) => {
  const { productId } = event.pathParameters;

  try {
    const productById = await product.getProductById(productId);
    if (!productById) throw new Error("Product not found");

    return formatResponse(200, productById);
  } catch (error) {
    return formatResponse(404, {
      message: error.message,
    });
  }
};

export const main = middyfy(getProductsById);
