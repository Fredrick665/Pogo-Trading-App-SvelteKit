export interface Pokemon {
	id: string;
	speciesId: number;
	form: string;
	cp: number;
	shiny: boolean;
	moves: { fast: string; charged: string };
	gender: 'male' | 'female' | 'unknown' | null;
	capturedAt: Date;
	imageUrl: string;
	source: 'raid' | 'egg' | 'research' | 'wild';
	tags: 'wanted' | 'tradeable';
}
