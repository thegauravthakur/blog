/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['picsum.photos'],
	},
	redirects: async () => [
		{
			source: '/:path*',
			destination: 'https://gauravthakur.in/blog/:path*',
			permanent: true,
		},
	],
}

module.exports = nextConfig
