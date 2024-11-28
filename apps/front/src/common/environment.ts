//https://ja.vitejs.dev/guide/env-and-mode.html

import { directionalIcons } from "@formkit/icons";

/**
import.meta.env.MODE: {string} アプリが動作しているモード。
import.meta.env.BASE_URL: {string} アプリが配信されているベース URL。これは base 設定オプション によって決まります。
import.meta.env.PROD: {boolean} アプリがプロダクションで動作しているかどうか。
import.meta.env.DEV: {boolean} アプリが開発で動作しているかどうか（常に import.meta.env.PROD の逆）
import.meta.env.SSR: {boolean} アプリがサーバで動作しているかどうか
*/

export const environment = () => {
    const env = {
            env: import.meta.env.MODE,
            base_url: import.meta.env.BASE_URL,
            prod: import.meta.env.PROD,
            dev: import.meta.env.DEV,
            ssr: import.meta.env.SSR,
            web_api_url: import.meta.env.VITE_WEB_API_URL,
            stack_web_api_url: import.meta.env.VITE_STACK_WEB_API_URL,            
            app_proxy_host: import.meta.env.VITE_APP_PROXY_HOST,

            //ghost config
            portal_url: import.meta.env.VITE_PORTAL_URL,
            ghost_api_url: import.meta.env.VITE_GHOST_API_URL,
            ghost_api_key: import.meta.env.VITE_GHOST_API_KEY,
            ghost_api_admin_url: import.meta.env.VITE_GHOST_API_ADMIN_URL,
            ghost_api_admin_key: import.meta.env.VITE_GHOST_API_ADMIN_KEY,
            ghost_email_service: import.meta.env.VITE_EMAIL_SERVICE,
            ghost_email_from: import.meta.env.VITE_EMAIL_FROM,
            ghost_site_url: import.meta.env.VITE_GHOST_SITE_URL,

    };

    return  { env }
};

