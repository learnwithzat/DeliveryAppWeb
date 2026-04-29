/** @format */


import { api } from '@/lib/api-service';
import { Order, OrderStatus } from '@/types/types';
import { useState, useEffect, useCallback } from 'react';

export const useOrders = () => {
	const [orders, setOrders] = useState<Order[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchOrders = useCallback(async () => {
		try {
			setLoading(true);
			const data = await api.orders.getAll();
			setOrders(data);
			setError(null);
		} catch (err: unknown) {
			const message = err instanceof Error ? err.message : 'Unknown error';
			setError(`Failed to load orders: ${message}`);
			console.error(err);
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		Promise.resolve().then(() => fetchOrders());
	}, [fetchOrders]);

	const handleStatusUpdate = useCallback(
		async (id: string, newStatus: OrderStatus) => {
			try {
				await api.orders.updateStatus(id, newStatus);
				setOrders((prev) =>
					prev.map((o) => (o.id === id ? { ...o, status: newStatus } : o))
				);
			} catch (err: unknown) {
				const message = err instanceof Error ? err.message : 'Unknown error';
				setError(`Failed to update status: ${message}`);
			}
		},
		[]
	);

	return { orders, loading, error, fetchOrders, handleStatusUpdate };
};
