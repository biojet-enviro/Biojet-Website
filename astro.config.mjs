// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://biojet.tech',
    base: '',
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'ru', 'pt', 'th'],
        routing: {
            prefixDefaultLocale: false
        }
    }
});
