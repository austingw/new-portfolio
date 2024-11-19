import type { Project } from './types';

const projects: Project[] = [
	{
		title: 'Freqmob',
		description: `A platform for musicians to share ideas and collaborate. Essentially, it's Reddit meets Soundcloud. Major features include auth, content creation, user-created groups, notifications, and a custom audio player with waveform visualization.`,
		techStack: ['Typescript', 'React', 'Next.js', 'AWS', 'MantineUI', 'DrizzleORM'],
		url: 'https://freqmob.com',
		repo: 'https://github.com/austingw/freqmob',
		imageSrc: ''
	},
	{
		title: 'Worduel',
		description: `A competitive, multiplayer word game inspired by Wordle. Players can create or join a room in the lobby and then race to guess a 5-letter word in real-time. Live messages update each player on their opponent's progress.`,
		techStack: ['Go', 'Svelte', 'Tanstack Query', 'Tailwind', 'Websockets'],
		url: 'https://worduel.austingw.com',
		repo: 'https://github.com/austingw/worduel',
		imageSrc: ''
	},
	{
		title: 'Reqord',
		description: `Sleek + speedy Postman-like API development tool for your terminal. Reqord allows you to save and organize HTTP requests for FAST recall and iteration.`,
		techStack: ['Go', 'Cobra', 'Viper', 'Bubbletea'],
		url: '',
		repo: 'https://github.com/austingw/reqord',
		imageSrc: ''
	},
	{
		title: 'Litter Ladder',
		description: `An exciting mobile app that placed first in the Charleston Summer Hacks: Hack for Good competition. Litter Ladder is a mobile app inspired by geocaching that gamifies environmental cleanup.`,
		techStack: ['Typescript', 'React Native', 'Node.js', 'Express', 'Prisma', 'MySQL'],
		url: 'https://devpost.com/software/litter-ladder',
		repo: 'https://github.com/cmoss767/cdc-hackathon-1',
		imageSrc: ''
	}
];

export default projects;
