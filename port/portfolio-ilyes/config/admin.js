module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('b58864c5ed8f31f309ce8f1f256c034363d7146458a6b6b0f156e9246887f42726199395610467a50cc1910a45c2a6a91c519532e2b78e83b1da86e9a134d5defd0a090b026015cfda159eb849c8b47596e28b382ceba9a8aebddc54d6889fa66e3051acd1b08b2a72a2e7930f8bc2cdde2fb0aa6c582ebd644ed126ba44e40e'),
  },
});
