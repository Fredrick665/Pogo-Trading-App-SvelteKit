import type { inventoryItem } from './inventoryItem.ts';
import type { User } from './user.ts';

export interface tradeOffer {
	id: string;
	Creatorid: string;
	Offereditems: inventoryItem[];
	Requesteitems: inventoryItem[];
	Participants: User[];

	Message: string;
	Status: 'pending' | 'accepted' | 'declined' | 'cancelled' | 'completed';
	createdAt: Date;
	expiresAt: Date;

	Visibility: boolean;
}
export interface tradeActivity {
	id: string;
	tradeId: string;
	actorId: string;
	Actions: 'Create' | 'Update' | 'Decline' | 'Cancel' | 'Accept';
}
