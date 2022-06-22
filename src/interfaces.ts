export enum TokenType {
  ERC20,
  ERC721,
  ERC1155,
}

export interface Value {
  gt: string;
  lt: string;
}

export interface Asset {
  token: string;
  amount: Value;
  id: string;
  tokenType: TokenType;
}

export interface Order {
  orderType: string;
  collateral: Asset[][];
  principal: Asset[][];
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

export interface Make {
  orderType: string;
  collateral: Asset[];
  principal: Asset[];
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
