/** @format */

import { api } from '@/lib/api-service';
import { Driver } from '@/types/types';
import { useState, useEffect, useCallback } from 'react';
export const useDrivers = () => {
	const [drivers, setDrivers] = useState<Driver[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchDrivers = useCallback(async () => {
		try {
			setLoading(true);
			const data = await api.drivers.getAll();
			setDrivers(data);
			setError(null);
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : 'Unknown error';
			setError(`Failed to load drivers: ${message}`);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		Promise.resolve().then(() => fetchDrivers());
	}, [fetchDrivers]);

	const toggleAvailability = useCallback(
		async (id: string, currentStatus: boolean) => {
			try {
				await api.drivers.updateAvailability(id, !currentStatus);
				setDrivers((prev) =>
					prev.map((d) =>
						d.id === id ? { ...d, isActive: !currentStatus } : d
					)
				);
			} catch (err: unknown) {
				const message = err instanceof Error ? err.message : 'Unknown error';
				setError(`Error updating driver status: ${message}`);
			}
		},
		[]
	);

	return { drivers, loading, error, fetchDrivers, toggleAvailability };
};
