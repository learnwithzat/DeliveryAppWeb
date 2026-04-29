/** @format */
import axios from 'axios';

import { Driver, Order, OrderStatus, RootArea } from '@/types/types';
const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const apiClient = axios.create({
	baseURL: API_BASE,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const api = {
	orders: {
		getAll: (): Promise<Order[]> =>
			apiClient.get('/orders').then((res) => res.data),
		create: (data: Partial<Order>): Promise<Order> =>
			apiClient.post('/orders', data).then((res) => res.data),
		updateStatus: (id: string, status: OrderStatus): Promise<Order> =>
			apiClient
				.patch(`/orders/${id}/status`, { status })
				.then((res) => res.data),
		assignDriver: (id: string, driverId: string): Promise<Order> =>
			apiClient
				.patch(`/orders/${id}/assign-driver`, { driverId })
				.then((res) => res.data),
	},
	drivers: {
		getAll: (): Promise<Driver[]> =>
			apiClient.get('/drivers').then((res) => res.data),
		updateAvailability: (id: string, isActive: boolean): Promise<Driver> =>
			apiClient.patch(`/drivers/${id}`, { isActive }).then((res) => res.data),
	},
	rootAreas: {
		getAll: (): Promise<RootArea[]> =>
			apiClient.get('/root-areas').then((res) => res.data),
	},
};
