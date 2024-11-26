module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@breezertwo/strapi-provider-upload-digitalocean",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"), // Tu clave de acceso
        secret: env("DO_SPACE_SECRET_KEY"), // Tu clave secreta
        endpoint: env("DO_SPACE_ENDPOINT"), // El endpoint del Space
        space: env("DO_SPACE_NAME"), // El nombre del Space
        region: env("DO_SPACE_REGION"), // La región del Space
        directory: env("DO_SPACE_DIRECTORY"), // Directorio por defecto
        cdn: env("DO_SPACE_CDN"), // Habilitar CDN (true o false)
      },
    },
  },
});
