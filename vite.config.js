import path from 'path'

const aliases = {
  '@': path.resolve(__dirname, '/src'),
  '@assets': path.resolve(__dirname, './src/assets'),
  '@sass': path.resolve(__dirname, './src/assets/sass'),
  '@images': path.resolve(__dirname, './src/assets/images'),
  '@services': path.resolve(__dirname, './src/services'),
} 

export default {
  resolve: { alias: aliases }
}