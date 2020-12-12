// 204 : account exists
// 205 : wrong username for login
// 206 : wrong password for login

const wrapResponse = (response, message) => {
  return {
    status: response,
    message,
  };
};

module.exports = wrapResponse;
