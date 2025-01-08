export class APIError extends Error {
    constructor(public message: string, public statusCode: number) {
      super(message);
      this.name = 'APIError';
    }
  }
  
  export const handleAPIError = (error: any) => {
    if (error.response) {
      const { status, data } = error.response;
  
      // Handle specific Chimoney API errors
      if (data.status === 'error') {
        switch (data.error) {
          case 'Insufficient balance in your CAD wallet':
            throw new APIError('Your CAD wallet does not have enough funds for this transaction.', status);
  
          case 'chimoneys body is not formated correctly':
            throw new APIError(
              'The request body for chimoneys is incorrectly formatted. Please check your payload.',
              status
            );
  
          default:
            throw new APIError(data.error || 'API returned an error', status);
        }
      }
  
      // Generic error handler
      throw new APIError(data?.message || 'API Error', status);
    } else if (error.request) {
      throw new APIError('No response received from API', 500);
    } else {
      throw new APIError(error.message, 500);
    }
  };
  