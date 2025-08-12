import type { ApiError } from './apiError.ts';

export interface uiState {
	isLoading: boolean;
	error: ApiError;
}
