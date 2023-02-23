import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
//@ts-ignore
import UnoCSS from 'unocss/vite';
import presetIcons from '@unocss/preset-icons';
import presetUno from '@unocss/preset-uno';

export default defineConfig({
  plugins: [
    solidPlugin(),
    UnoCSS({
      presets: [presetIcons(), presetUno()],
      shortcuts: {
        btn: 'py-2 px-4 font-semibold rounded-lg shadow-md bg-blue-100',
      },
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
