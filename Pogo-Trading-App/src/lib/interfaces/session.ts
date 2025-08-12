export interface Session {
	token: string;
	userId: string;
	expiresAt: Date;
	isAuthenticated: boolean;
}
