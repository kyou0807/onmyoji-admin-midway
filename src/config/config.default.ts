import { CoolConfig } from '@cool-midway/core';
import { MidwayConfig } from '@midwayjs/core';
import { CoolCacheStore } from '@cool-midway/core';
import { createAdapter } from '@socket.io/redis-adapter';

import Redis from 'ioredis';

const redisOptions = {
  port: 6379,
  host: '124.220.68.181',
  password: 'kyou0807',
  ttl: 0,
  db: 0,
};

const pubClient = new Redis(redisOptions);
const subClient = pubClient.duplicate();

// redis缓存
import { redisStore } from 'cache-manager-ioredis-yet';

export default {
  // use for cookie sign key, should change to your own and keep security
  keys: 'onmyoji-admin-keys-cpyp0101',
  koa: {
    port: 8001,
  },
  // 模板渲染
  view: {
    mapping: {
      '.html': 'ejs',
    },
  },
  // 静态文件配置
  staticFile: {
    buffer: true,
  },
  // 文件上传
  upload: {
    fileSize: '200mb',
    whitelist: null,
  },
  // 缓存 可切换成其他缓存如：redis http://www.midwayjs.org/docs/extensions/caching
  // cacheManager: {
  //   clients: {
  //     default: {
  //       store: CoolCacheStore,
  //       options: {
  //         path: 'cache',
  //         ttl: 0,
  //       },
  //     },
  //   },
  // },

  cacheManager: {
    clients: {
      default: {
        store: redisStore,
        options: redisOptions,
      },
    },
  },
  // socketio
  socketIO: {
    upgrades: ['websocket'], // 可升级的协议
    adapter: createAdapter(pubClient, subClient),
    port: 7001,
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    },
  },
  cool: {
    // 已经插件化，本地文件上传查看 plugin/config.ts，其他云存储查看对应插件的使用
    file: {},

    // crud配置
    crud: {
      // 插入模式，save不会校验字段(允许传入不存在的字段)，insert会校验字段
      upsert: 'save',
      // 软删除
      softDelete: true,
    },
    redis: {
      port: 6379, // Redis port
      host: '124.220.68.181',
      password: 'kyou0807',
      db: 0,
    },
  } as CoolConfig,
} as MidwayConfig;
