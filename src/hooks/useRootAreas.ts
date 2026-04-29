/** @format */

import { api } from '@/lib/api-service';
import { RootArea } from '@/types/types';
import { useState, useEffect, useCallback } from 'react';

export const useRootAreas = () => {
	const [rootAreas, setRootAreas] = useState<RootArea[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchRootAreas = useCallback(async () => {
		try {
			setLoading(true);
			const data = await api.rootAreas.getAll();
			setRootAreas(data);
			setError(null);
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : 'Unknown error';
			setError(`Failed to load areas: ${message}`);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		// Microtask wrapper to avoid cascading render lint warning
		Promise.resolve().then(() => fetchRootAreas());
	}, [fetchRootAreas]);

	return { rootAreas, loading, error, fetchRootAreas };
};
