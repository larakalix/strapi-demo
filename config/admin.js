module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3da1d8ef456c965a735dd5c66d651cee'),
  },
});
