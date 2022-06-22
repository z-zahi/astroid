export const SITE = {
	title: 'Astro Router',
	description: 'Extend Astro routing system.',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro router logo in space.'
	},
	twitter: 'xis___',
};

export const KNOWN_LANGUAGES = {
	English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/withastro/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   appId: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
	en: [
		{ text: '', header: true },
		{ text: 'Astro Router', header: true },
		{ text: 'Introduction', link: 'en/introduction' },
		{ text: 'Installation', link: 'en/installation' },

		{ text: 'Getting started', header: true },
		{ text: 'Link', link: 'en/link' },
		{ text: 'Router', link: 'en/router' },

	],
};
