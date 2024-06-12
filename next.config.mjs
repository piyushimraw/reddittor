/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        instrumentationHook: true,
        serverComponentsExternalPackages: ['sharp', 'onnxruntime-node'],
    },
};

export default nextConfig;
