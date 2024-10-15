const redis = require('redis');

// 从环境变量获取 Redis 主机名和端口
const redisHost = process.env.REDIS_HOST || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;

// 创建 Redis 客户端
const client = redis.createClient({
    host: redisHost,
    port: redisPort,
});

client.on('connect', () => {
    console.log('连接到 Redis 成功');
});

client.on('error', (err) => {
    console.error('Redis 连接错误:', err);
});

// 其他后端代码...

module.exports = client;