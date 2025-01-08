//  Interfaces and types for Chimoney API interactions
export interface RedeemData {
    walletID: string;
    interledgerWalletAddress: string;
  }
  
  export interface ChimoneyPayoutRequestItem {
    redeemData: RedeemData;
    email: string;
    phone: string;
    valueInUSD?: number;
    amount: number;
    currency: string;
    narration?: string;
    collectionPaymentIssueID?: string;
  }
  
  export interface ChimoneyPayoutRequest {
    chimoneys: ChimoneyPayoutRequestItem[];
  }
  
  export interface ChimoneyPayoutResponse {
    status: string;
    message: string;
    data?: any;
    error?: string;
  }
  