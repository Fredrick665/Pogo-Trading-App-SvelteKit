import type { Pokemon } from './pokemon.ts';

export interface inventoryItem {
	id: string;
	pokemon: Pokemon;
	ownerId: string;
	isLocked: boolean;
	createdAt: Date;
}
