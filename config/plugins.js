module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "strapi-provider-upload-do",
      providerOptions: {
        key: env("DO_SPACE_ACCESS_KEY"), // Tu clave de acceso
        secret: env("DO_SPACE_SECRET_KEY"), // Tu clave secreta
        endpoint: env("DO_SPACE_ENDPOINT"), // El endpoint del Space
        space: env("DO_SPACE_NAME"), // El nombre del Space
        directory: env("DO_SPACE_DIRECTORY", "uploads"), // Directorio por defecto
        cdn: env.bool("DO_SPACE_CDN", false), // Habilitar CDN (true o false)
      },
    },
  },
});
