/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.radugazvukov.ru",
				port: "",
			},
			{
				protocol: "https",
				hostname: "domsluha.ru",
				port: "",
			},
			{
				protocol: "https",
				hostname: "tehnikasluha.ru",
				port: "",
			},
			{
				protocol: "https",
				hostname: "magazin-sluha.ru",
				port: "",
			},
			{
				protocol: "https",
				hostname: "mirsluha.ru",
				port: "",
			},
			{
				protocol: "https",
				hostname: "r-sluh.ru",
				port: "",
			},
			{
				protocol: "https",
				hostname: "**.zakupka.com",
				port: "",
			},
		],
	},
};

export default nextConfig;
