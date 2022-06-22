import { Asset } from "./interfaces";

export const mapOrderAssets = (assets: Asset[][]) => {
  return assets.map((y) =>
    y.map((x) => [x.token, [x.amount.gt, x.amount.lt], x.id, x.tokenType])
  );
};

export const mapMakeAssets = (assets: Asset[]) => {
  return assets.map((x) => [x.token, x.amount, x.id, x.tokenType]);
};
