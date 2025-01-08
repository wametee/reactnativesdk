import axios, { AxiosInstance } from 'axios';
import { API_BASE_URL, API_KEY } from './constants';
import { handleAPIError } from './errorHandler';
import { ChimoneyPayoutRequest, ChimoneyPayoutResponse } from './interfaces';

class APIWrapper {
  private client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': API_KEY,
      },
    });
  }

  /**
   * Initiate a payout using the Chimoney Payout API.
   * @param data ChimoneyPayoutRequest
   * @returns Promise<ChimoneyPayoutResponse>
   */
  public async initiatePayout(data: ChimoneyPayoutRequest): Promise<ChimoneyPayoutResponse> {
    try {
      const response = await this.client.post<ChimoneyPayoutResponse>('/payouts/chimoney', data);
      return response.data;
    } catch (error) {
      handleAPIError(error); // Handles specific errors here
    }
  }
}

export default new APIWrapper();

