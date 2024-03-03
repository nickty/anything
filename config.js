export const APP_NAME = 'Anything';

const checkConfig = server => {
  let config = {};
  switch (server) {
    case 'production':
      config = {
        apiBaseUrl: 'https://anything-server.vercel.app',
      };
      break;
    case 'staging':
      config = {
        apiBaseUrl: 'http://10.0.2.2:3000',
      };
      break;
    default:
      break;
  }

  return config;
};

export const selectServer = 'staging';

export const config = checkConfig(selectServer);
