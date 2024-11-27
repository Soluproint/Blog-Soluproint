module.exports = ({ env }) => ({
  proxy: true,
  url: "https://blog.soluproint.com",
  webhooks: {
    populateRelations: env.bool("WEBHOOKS_POPULATE_RELATIONS", false),
  },
  admin: {
    url: "/admin",
  },
});
