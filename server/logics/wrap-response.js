const wrapResponse = (response, message) => {
  return {
    status: response,
    message,
  };
};

module.exports = wrapResponse;
