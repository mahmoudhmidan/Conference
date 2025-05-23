import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';
import Layout from './layouts/Layout';
import './i18n'; 
import i18n from './i18n';
const appName = import.meta.env.VITE_APP_NAME || 'Laravel';



createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.jsx`,
            import.meta.glob('./pages/**/*.jsx')
        ),
    
        setup({ el, App, props }) {
            const root = createRoot(el);   
              i18n.changeLanguage('ar');
              document.documentElement.lang = 'ar';
              document.documentElement.dir = 'rtl';
           
            console.log('props.page:', props.initialPage.component)

            root.render(
              
                    <Layout>
                    <App {...props} />
                </Layout>
                )
        },
        
        

    progress: {
        color: '#4B5563',
    },
});