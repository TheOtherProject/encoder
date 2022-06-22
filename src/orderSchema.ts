import * as Yup from "yup";

const numberTypeErrorStr = '${path}: Failed to cast "${value}" to number';

const requiredErrorStrFn = ({ path }: { path: string }) => `${path}: required`;

const numberSchema = Yup.number().typeError(numberTypeErrorStr);

const valueSchema = Yup.object({
  gt: Yup.number().default(0),
  lt: Yup.number().default(0),
});

const assetSchema = Yup.object({
  token: Yup.string()
    .matches(/^0x[a-fA-F0-9]{40}$/, "${path}: Not a valid ethereum address")
    .required(requiredErrorStrFn),
  amount: valueSchema.required(requiredErrorStrFn),
  id: numberSchema.default(0),
  tokenType: numberSchema.required(requiredErrorStrFn),
});

export const orderSchema = Yup.object({
  orderType: numberSchema.min(0).max(2).required(requiredErrorStrFn),
  collateral: Yup.array(Yup.array(assetSchema)).min(1),
  principal: Yup.array(Yup.array(assetSchema)).min(1),
  interest: Yup.object({
    token: Yup.string()
      .matches(/^0x[a-fA-F0-9]{40}$/, "${path}: Not a valid ethereum address")
      .required(requiredErrorStrFn),
    amount: valueSchema.required(requiredErrorStrFn),
    total: valueSchema.required(requiredErrorStrFn),
    period: valueSchema.required(requiredErrorStrFn),
    rate: valueSchema.required(requiredErrorStrFn),
    relative: numberSchema.required(requiredErrorStrFn),
  }),
  term: valueSchema.required(requiredErrorStrFn),
  expires: numberSchema.required(requiredErrorStrFn),
  nonce: numberSchema.required(requiredErrorStrFn),
});
