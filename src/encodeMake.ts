import { AbiCoder } from "@ethersproject/abi";
import { MakeAsset } from "./constants";
import { mapMakeAssets } from "./utils";
import { Make } from "./interfaces";

export function encodeMake(inputData: Make) {
  const abi = new AbiCoder();

  const { orderType, term, expires, nonce, interest, collateral, principal } =
    inputData;

  // prettier-ignore
  const data = [
    orderType,
    // collateral
    mapMakeAssets(collateral),
    // principal
    mapMakeAssets(principal),
    // interest
    [
      interest.token,
      interest.amount,
      interest.total,
      interest.rate,
      interest.period,
      interest.relative
    ],
    // term
    term,
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
        `${MakeAsset}[]`,
        // principal
        `${MakeAsset}[]`,
        // interest
        `tuple(address,uint256,uint256,uint256,uint256,uint256)`,
        // term
        "uint256",
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
