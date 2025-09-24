// Vercel serverless entry: import ESM compiled Express app and export as CommonJS
let cachedApp;
module.exports = async (req, res) => {
	if (!cachedApp) {
		const mod = await import('../dist/server/index.js');
		cachedApp = mod.default || mod;
	}
	return cachedApp(req, res);
};
