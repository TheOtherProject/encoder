export enum TokenType {
  ERC20,
  ERC721,
  ERC1155,
}

export interface Value {
  gt: string;
  lt: string;
}

export interface OrderAsset {
  token: string;
  amount: Value;
  id: string;
  tokenType: TokenType;
}

export interface Order {
  orderType: string;
  collateral: OrderAsset[][];
  principal: OrderAsset[][];
  interest: {
    token: string;
    amount: Value;
    total: Value;
    rate: Value;
    period: Value;
    relative: string;
  };
  term: Value;
  expires: string;
  nonce: string;
}

export interface MakeAsset {
  token: string;
  amount: string;
  id: string;
  tokenType: TokenType;
}

export interface Make {
  orderType: string;
  collateral: MakeAsset[];
  principal: MakeAsset[];
  interest: {
    token: string;
    amount: string;
    total: string;
    rate: string;
    period: string;
    relative: string;
  };
  term: string;
  expires: string;
  nonce: string;
}
