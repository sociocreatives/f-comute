/** @type {import('next').NextConfig} */

// environment variables
module.exports ={
  env: {
    GOOGLE_ID: "675709345107-tmsmosqnvskpsu5tbiujgv1gq6msgnp6.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    
    FACEBOOK_CLIENT_ID: 597760165390069,
    FACEBOOK_CLIENT_SECRET: "5069c3ddf95eadb4c95da2e993f5e3cd",
    
    MONGODB_URI: "mongodb+srv://comute:comute_ayara12@cluster1.iqrga.mongodb.net/?retryWrites=true&w=majority",
    
    NEXTAUTH_URL: "http://localhost:3000",
    
    JWT_SECRET: "ZIoJMHyzDaExglU7tGrJ+XZeBFh/VcvRln7Ksw7RZEo=",
    
    REACT_APP_GOOGLE_MAPS_API_KEY: "AIzaSyCnSALS_W4_pClAPF1bWYIDBhIe7G-82WY"
  }
}

// svg imports
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

// next.config.js
module.exports = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}


