import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";
import { formatResponse } from "src/utils/formatRespons";

const results = [
  {
    name: "Business Tariff",
    downloadSpeed: 1000,
    uploadSpeed: 1000,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    price: 199,
    id: 0,
  },
  {
    name: "Best Tariff",
    downloadSpeed: 1000,
    uploadSpeed: 99,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    price: 69,
    id: 1,
  },
  {
    name: "Super Tariff",
    downloadSpeed: 100,
    uploadSpeed: 100,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    price: 49,
    id: 2,
  },
  {
    name: "Good Tariff",
    downloadSpeed: 60,
    uploadSpeed: 10,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    price: 39,
    id: 3,
  },
  {
    name: "Medium Tariff",
    downloadSpeed: 40,
    uploadSpeed: 5,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    price: 29,
    id: 4,
  },
  {
    name: "Basic Tariff",
    downloadSpeed: 10,
    uploadSpeed: 1,
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
    price: 19,
    id: 5,
  },
];

const getProductsList: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async () => {
  return formatResponse(200, results);
};

export const main = middyfy(getProductsList);
