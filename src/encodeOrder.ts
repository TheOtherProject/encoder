import { AbiCoder } from "@ethersproject/abi";
import { Value, OrderAsset } from "./constants";
import { mapOrderAssets } from "./utils";
import { Order } from "./interfaces";

export function encodeOrder(inputData: Order) {
  const abi = new AbiCoder();

  const { orderType, term, expires, nonce, interest, collateral, principal } =
    inputData;

  // prettier-ignore
  const data = [
    orderType,
    // collateral
    [mapOrderAssets(collateral)],
    // principal
    [mapOrderAssets(principal)],
    // interest
    [
      interest.token,
      [interest.amount.gt, interest.amount.lt],
      [interest.total.gt, interest.total.lt],
      [interest.rate.gt, interest.rate.lt],
      [interest.period.gt, interest.period.lt],
      interest.relative
    ],
    // term
    [term.gt, term.lt],
    // expires
    expires,
    // nonce
    nonce,
  ];

  // prettier-ignore
  const encoded = abi.encode(
    [
      `tuple(${[
        "uint256",
        // collateral
        `tuple(${OrderAsset}[][])`,
        // principal
        `tuple(${OrderAsset}[][])`,
        // interest
        `tuple(address,${Value},${Value},${Value},${Value},uint256)`,
        // term
        `${Value}`,
        // expires
        "uint256",
        // nonce
        "uint256",
      ].join(",")})`,
    ],
    [data]
  );

  return { encoded, data };
}
