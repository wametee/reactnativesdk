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

  export interface MomoPayload {
    countryToSend: string; // Payout country (e.g., Kenya)
    phoneNumber: string; // Recipient phone number (e.g., 254710102720)
    valueInUSD: number; // Payout value in USD
    reference?: string; // Transaction reference (optional)
    momoCode: string; // Mobile money code (e.g., MPS)
    narration?: string; // Payment narration/description (optional)
    collectionPaymentIssueID?: string; // Issue ID for the payment payout (optional)
  }
  
  export interface PayoutMobileMoneyRequest {
    subAccount?: string; // Wallet account to payout from (optional)
    turnOffNotification?: boolean; // Disable email and other notifications (optional)
    momos: MomoPayload[]; // List of mobile money transactions
  }
  
  export interface PayoutMobileMoneyResponse {
    status: string; // Response status (e.g., "success" or "error")
    data?: {
      chimoneys: Array<{
        id: string;
        countryToSend: string;
        phoneNumber: string;
        valueInUSD: number;
        reference: string;
        momoCode: string;
        narration: string;
        collectionPaymentIssueID?: string;
        chimoney: number;
        fee: number;
        redeemLink: string;
      }>;
      paymentLink?: string;
      error?: string; // Error description if status is "error"
    };
    error?: string; // Error details
  }
  