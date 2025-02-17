import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        svgr({ include: 'src/**/*.svg' }),
        VitePWA({
            strategies: 'injectManifest',
            srcDir: 'src',
            filename: 'sw.js',
            injectRegister: 'auto',
            registerType: 'autoUpdate',
            injectManifest: {
                swDest: 'dist/sw.js',
            },
            manifest: {
                name: 'Surf PWA Project',
                short_name: 'Surf Bank',
                icons: [
                    {
                        src: '/apple-icon-180.png',
                        sizes: '180x180',
                        type: 'image/png',
                        purpose: 'any',
                    },
                    {
                        src: '/manifest-icon-192.maskable.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                    {
                        src: '/manifest-icon-512.maskable.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable',
                    },
                ],
            },
        }),
    ],
    test: {
        globals: true,
        environment: 'jsdom',
    },
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
            {
                find: '@fortawesome/fontawesome-svg-core',
                replacement: '/src/empty-module.ts',
            },
            {
                find: '@fortawesome/react-fontawesome',
                replacement: '/src/empty-module.ts',
            },
        ],
    },
    server: {
        port: 3000,
        proxy: {
            '/api': {
                target: '',
                changeOrigin: true,
            },
        },
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                },
            },
        },
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use 'src/app/styles/variables/endpoints' as *;`,
            },
        },
    },
});
