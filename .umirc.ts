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
    { exact: true, name: '首页', path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
