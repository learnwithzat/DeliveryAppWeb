/** @format */

'use client';

import { useOrders } from '@/hooks/useOrders';
import { OrderStatus } from '@/types/types';
import Link from 'next/link';

export default function OrdersPage() {
	const { orders, loading, error, handleStatusUpdate } = useOrders();

	if (loading) return <div className='p-8 text-center'>Loading orders...</div>;
	if (error) return <div className='p-8 text-red-500 text-center'>{error}</div>;

	return (
		<div className='p-8 max-w-7xl mx-auto'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-bold text-gray-800'>Order Management</h1>
				<Link
					href='/'
					className='text-blue-600 hover:underline'>
					Back to Dashboard
				</Link>
			</div>

			<div className='bg-white shadow-sm border border-gray-200 rounded-xl overflow-hidden'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead className='bg-gray-50 text-gray-500 text-xs uppercase font-semibold'>
						<tr>
							<th className='px-6 py-4 text-left'>Customer</th>
							<th className='px-6 py-4 text-left'>Total</th>
							<th className='px-6 py-4 text-left'>Status</th>
							<th className='px-6 py-4 text-right'>Action</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 text-sm'>
						{orders.map((order) => (
							<tr
								key={order.id}
								className='hover:bg-gray-50 transition-colors'>
								<td className='px-6 py-4'>
									<div className='font-medium text-gray-900'>
										{order.customerName}
									</div>
									<div className='text-gray-500'>{order.customerPhone}</div>
								</td>
								<td className='px-6 py-4 text-gray-900 font-medium'>
									${order.totalPrice}
								</td>
								<td className='px-6 py-4'>
									<span
										className={`px-2 py-1 rounded-full text-xs font-bold ${order.status === 'DELIVERED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
										{order.status}
									</span>
								</td>
								<td className='px-6 py-4 text-right'>
									<select
										className='bg-transparent text-blue-600 font-medium cursor-pointer'
										value={order.status}
										onChange={(e) =>
											handleStatusUpdate(
												order.id,
												e.target.value as OrderStatus
											)
										}>
										<option value='PENDING'>Pending</option>
										<option value='ASSIGNED'>Assigned</option>
										<option value='PICKED_UP'>Picked Up</option>
										<option value='DELIVERED'>Delivered</option>
									</select>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
