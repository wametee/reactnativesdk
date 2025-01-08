export const logger = {
    log: (message: string) => {
      console.log(`[LOG]: ${message}`);
    },
    error: (error: Error) => {
      console.error(`[ERROR]: ${error.message}`);
    },
  };
  