import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

const root = (p: string) => fileURLToPath(new URL(p, import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: root('./index.html'),
        work: root('./work.html'),
        journey: root('./journey.html'),
        contact: root('./contact.html'),
      },
    },
  },
})
