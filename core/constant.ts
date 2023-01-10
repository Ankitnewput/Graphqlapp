
export const constants = {
    ENV: {
      LOCALHOST: 'localhost'
    },

}

export function isLocalhost(): boolean {
    return [undefined, constants.ENV.LOCALHOST].includes(process.env.NODE_ENV);
  }
  