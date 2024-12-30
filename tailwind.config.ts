import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'atom': {
				'bg': '#282c34',
				'fg': '#abb2bf',
				'black': '#1e2127',
				'blue': '#61afef',
				'cyan': '#56b6c2',
				'green': '#98c379',
				'purple': '#c678dd',
				'red': '#e06c75',
				'yellow': '#e5c07b',
				'orange': '#d19a66',
				'gray': {
					'light': '#5c6370',
					'dark': '#4b5263'
				},
				'gutter': '#4b5263',
				'selection': '#3e4451',
			}
		}
	},

	plugins: []
} satisfies Config;
