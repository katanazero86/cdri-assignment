import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  console.log('mode:', mode);
  console.log(process.env.NODE_ENV);
  const env = loadEnv(mode, process.cwd());
  console.log('env:', env);

  const requiredEnvVars = ['VITE_KAKAO_BOOK_API_KEY', 'VITE_KAKAO_BOOK_API_URL'];
  const result = requiredEnvVars.filter((envVar) => env[envVar]);
  if (result.length !== requiredEnvVars.length) {
    console.error('필수 환경 변수가 누락 되었습니다.');
    process.exit(1);
  }

  return {
    plugins: [react(), tailwindcss()],
  };
});
