export default () => ({
  port: parseInt(process.env.PORT, 10) || 3333,
  rabbitmq: {
    host: process.env.RABBITMQ_HOST || 'amqp://user:passwd@127.0.0.1:5672',
  },
  queues: {
    direct1: 'direct1',
  },
});
