module.exports = () => {
  const emailConfig = {
    apiKey: process.env.MAILGUN_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  };
  return emailConfig;
};
