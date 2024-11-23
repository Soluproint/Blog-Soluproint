module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        accessKeyId: env("DO_SPACE_ACCESS_KEY"), // Clave de acceso
        secretAccessKey: env("DO_SPACE_SECRET_KEY"), // Clave secreta
        endpoint: env("DO_SPACE_ENDPOINT"), // Endpoint de tu Space
        params: {
          Bucket: env("DO_SPACE_BUCKET"), // Nombre del bucket
        },
      },
    },
  },
});
