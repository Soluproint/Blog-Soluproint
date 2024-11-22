module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "@strapi/provider-upload-aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACES_ACCESS_KEY"), // Clave de acceso
        secretAccessKey: env("DO_SPACES_SECRET_KEY"), // Clave secreta
        region: "nyc3", // Región del Space
        params: {
          Bucket: env("DO_SPACES_BUCKET"), // Nombre del Space
        },
        endpoint: env("DO_SPACES_ENDPOINT"), // Endpoint del Space
      },
      actionOptions: {
        upload: {
          sizeLimit: 10000000, // Tamaño máximo del archivo 10MB
        }, // Opciones para la acción de carga (normalmente vacío).
        delete: {}, // Opciones para la acción de eliminación (normalmente vacío).
      },
    },
  },
});
