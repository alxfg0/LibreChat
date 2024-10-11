// v0.7.5-rc2
// See .env.test.example for an example of the '.env.test' file.
if (process.env.NODE_ENV !== 'production') {
	require('dotenv').config({ path: './e2e/.env.test' });
}