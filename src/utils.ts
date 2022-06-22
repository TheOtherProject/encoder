import { OrderAsset, MakeAsset } from "./interfaces";

export const mapOrderAssets = (assets: OrderAsset[][]) => {
  return assets.map((y) =>
    y.map((x) => [x.token, [x.amount.gt, x.amount.lt], x.id, x.tokenType])
  );
};

export const mapMakeAssets = (assets: MakeAsset[]) => {
  return assets.map((x) => [x.token, x.amount, x.id, x.tokenType]);
};
