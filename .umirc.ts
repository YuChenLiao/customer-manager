import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  dva: {
    immer: true,
    hmr: false,
  },
  antd: {},
  layout: { name: '客房管理系统', locale: false },
  routes: [
    {
      exact: true,
      path: '/',
      component: '@/pages/login',
      headerRender: false,
      menuRender: false,
    },
    {
      exact: true,
      name: '首页',
      path: '/index',
      component: '@/pages/index',
      wrappers: ['@/wrappers/auth'],
    },
    {
      exact: true,
      name: '客房名单',
      path: '/roomList',
      component: '@/pages/roomList',
      wrappers: ['@/wrappers/auth'],
    },
    {
      exact: true,
      name: '信息统计',
      path: '/infoCollect',
      component: '@/pages/infoCollect',
      wrappers: ['@/wrappers/auth'],
    },
  ],
  fastRefresh: {},
});
