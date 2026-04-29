/** @format */

'use client';

import { useRootAreas } from '@/hooks/useRootAreas';
import Link from 'next/link';

export default function RootAreasPage() {
	const { rootAreas, loading, error } = useRootAreas();

	if (loading)
		return (
			<div className='p-8 text-center text-gray-500'>Loading areas...</div>
		);

	if (error) return <div className='p-8 text-red-500 text-center'>{error}</div>;

	return (
		<div className='p-8 max-w-7xl mx-auto'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-bold text-gray-800'>Service Areas</h1>
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
							<th className='px-6 py-4 text-left'>Area Name</th>
							<th className='px-6 py-4 text-left'>Base Delivery Fee</th>
							<th className='px-6 py-4 text-right'>Status</th>
						</tr>
					</thead>
					<tbody className='divide-y divide-gray-200 text-sm'>
						{rootAreas.map((area) => (
							<tr
								key={area.id}
								className='hover:bg-gray-50 transition-colors'>
								<td className='px-6 py-4'>
									<div className='font-medium text-gray-900'>{area.name}</div>
								</td>
								<td className='px-6 py-4 text-gray-900 font-medium'>
									${area.deliveryFee}
								</td>
								<td className='px-6 py-4 text-right'>
									<span className='px-2 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700'>
										Active
									</span>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
