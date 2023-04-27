interface Profile {
  id: number;
  name: string;
  created_at: string;
  description: string;
  image: string;
  balance: number;
  status: number;
}

interface NFTModel {
  id: number;
  name: string;
  description: string;
  image: string;
  external_url: string;
  price: number;
  status: Status;
  attributes: []
  owner: number;
}
// abstract

interface NFTAttribute {
  name: string;
  trait_type: string;
  value: string;
}

enum Status {
  ONSALE = 0,
  ONBID = 1,
  UNLISTED = 2,
}

interface ErrorResponse {
  error: {
    message: string;
    code?: number;
    // diğer özellikler eklenebilir
  };
}

interface TransactionModel {
  id: string;
  from: Profile;
  to: Profile;
  amount: number;
  status: Status;
  timestamp: string;
}

export {
  Profile,
  NFTModel,
  NFTAttribute,
  Status,
  TransactionModel,
  ErrorResponse,
};
