import { defineConfig } from 'umi';

export default defineConfig({
  plugins: ['@umijs/plugins/dist/react-query'],
  reactQuery: {},
  routes: [
    { path: '/', component: 'index', name: 'home' },
    { path: '/docs', component: 'docs', name: 'doc' },
    { path: '/products', component: 'products', name: 'product' },
    { path: '/checked', component: 'checked-products', name: 'checked' },
  ],
  npmClient: 'pnpm',
});
