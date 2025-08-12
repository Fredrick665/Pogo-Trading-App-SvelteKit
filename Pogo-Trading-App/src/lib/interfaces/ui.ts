import type { ApiError } from './ApiError.js';

export interface uiState {
	isLoading: boolean;
	error: ApiError;
}
