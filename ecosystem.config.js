module.exports = {
  apps: [
    {
      name: 'utn-example',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      }
    }
  ]
};
