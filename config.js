export const APP_NAME = 'Anything';

const checkConfig = server => {
  let config = {};
  switch (server) {
    case 'production':
      config = {
        apiBaseUrl: 'https://anything-server.vercel.app/',
      };
      break;
    case 'staging':
      config = {
        apiBaseUrl: 'https://anything-server.vercel.app',
      };
      break;
    default:
      break;
  }

  return config;
};

export const selectServer = 'production';

export const config = checkConfig(selectServer);
