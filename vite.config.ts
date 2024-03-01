import {sveltekit} from '@sveltejs/kit/vite';
import {defineConfig, loadEnv} from 'vite';
import mkcert from 'vite-plugin-mkcert';

const keyPath = process.env.SSL_KEY!;
const certPath = process.env.SSL_CERT!;

const mkcertOptions = {
    autoUpgrade: true,
    keyFileName: keyPath,
    certFileName: certPath,
};

export default defineConfig(({  mode }) => {
    const env = loadEnv(mode, process.cwd());
    Object.assign(process.env, env);
    return {
        plugins: [
            mkcert(mkcertOptions),
            sveltekit()],
        server: {
            https: true,
			host: '0.0.0.0',
        },
        define: {
            'process.env': process.env
        }
    };
});