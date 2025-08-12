export interface Notification {
	id: string;
	userId: string;
	type: 'tradeRequest' | 'tradeUpdate';
	Payload: {};
	Read: boolean;
	createdAt: Date;
}
