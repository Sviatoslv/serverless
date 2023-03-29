import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { formatResponse } from "src/utils/formatRespons";
import { product } from "src/data/product";

const getProductsList: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async () => {
  try {
    const products = await product.getProducts();
    return formatResponse(200, products);
  } catch (error) {
    return formatResponse(404, {
      error,
    });
  }
};

export const main = middyfy(getProductsList);
