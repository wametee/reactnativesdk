import APIWrapper from '../api/apiWrapper';
import { ChimoneyPayoutRequest } from '../api/interfaces';

jest.mock('axios');

describe('APIWrapper - Error Handling', () => {
  it('should handle insufficient balance error', async () => {
    const mockRequest: ChimoneyPayoutRequest = {
      chimoneys: [
        {
          redeemData: {
            walletID: 'testWalletID',
            interledgerWalletAddress: 'https://ilp.chimoney.io/test',
          },
          email: 'test@example.com',
          phone: '+1234567890',
          amount: 1000, // Large amount to trigger insufficient balance
          currency: 'CAD',
        },
      ],
    };

    const mockError = {
      response: {
        status: 400,
        data: {
          status: 'error',
          error: 'Insufficient balance in your CAD wallet',
        },
      },
    };

    jest.spyOn(APIWrapper['client'], 'post').mockRejectedValue(mockError);

    await expect(APIWrapper.initiatePayout(mockRequest)).rejects.toThrow(
      'Your CAD wallet does not have enough funds for this transaction.'
    );
  });

  it('should handle invalid chimoneys body error', async () => {
    const mockRequest: ChimoneyPayoutRequest = {
      chimoneys: [],
    };

    const mockError = {
      response: {
        status: 400,
        data: {
          status: 'error',
          error: 'chimoneys body is not formated correctly',
        },
      },
    };

    jest.spyOn(APIWrapper['client'], 'post').mockRejectedValue(mockError);

    await expect(APIWrapper.initiatePayout(mockRequest)).rejects.toThrow(
      'The request body for chimoneys is incorrectly formatted. Please check your payload.'
    );
  });
});


// import APIWrapper from '../api/apiWrapper';

// (async () => {
//   const mockRequest = {
//     chimoneys: [
//       {
//         redeemData: {
//           walletID: 'testWalletID',
//           interledgerWalletAddress: 'https://ilp.chimoney.io/test',
//         },
//         email: 'test@example.com',
//         phone: '+1234567890',
//         amount: 1000, // Example amount exceeding balance
//         currency: 'CAD',
//       },
//     ],
//   };

//   try {
//     const response = await APIWrapper.initiatePayout(mockRequest);
//     console.log('Payout Response:', response);
//   } catch (error) {
//     console.error('Payout Error:', error.message);
//   }
// })();
