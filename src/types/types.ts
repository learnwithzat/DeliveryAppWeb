/** @format */

export interface Driver {
	id: string;
	name: string;
	phone: string;
	isActive: boolean;
}

export interface Order {
	id: string;
	customerName: string;
	customerPhone: string;
	status: OrderStatus;
	totalPrice: string;
}

export type OrderStatus = 'PENDING' | 'ASSIGNED' | 'PICKED_UP' | 'DELIVERED';

export interface RootArea {
	id: string;
	name: string;
	deliveryFee: string;
}
