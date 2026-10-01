export type BlogPostMetadata = {
	title: string;
	date: string;
	author?: string;
	description?: string;
	tags?: string[];
	published?: boolean;
};

const WORDS_PER_MINUTE = 200;
const CJK_CHARACTERS_PER_MINUTE = 500;

export function calculateReadingTime(markdown: string): number {
	const body = markdown
		.replace(/^---\s*[\s\S]*?\s*---/, '')
		.replace(/```[\s\S]*?```/g, ' ')
		.replace(/`[^`]*`/g, ' ')
		.replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
		.replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
		.replace(/<[^>]*>/g, ' ');

	const latinWords = body.match(/[A-Za-z0-9]+(?:['’-][A-Za-z0-9]+)*/g)?.length ?? 0;
	const cjkCharacters = body.match(/[\u3040-\u30ff\u3400-\u9fff]/g)?.length ?? 0;

	return Math.max(
		1,
		Math.ceil(latinWords / WORDS_PER_MINUTE + cjkCharacters / CJK_CHARACTERS_PER_MINUTE)
	);
}
