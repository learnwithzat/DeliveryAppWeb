/** @format */

'use client';

import { useDrivers } from '@/hooks/useDrivers';
import Link from 'next/link';

export default function DriversPage() {
	const { drivers, loading, error, toggleAvailability } = useDrivers();

	if (loading)
		return (
			<div className='p-8 text-center text-gray-500'>Loading drivers...</div>
		);

	if (error) return <div className='p-8 text-red-500 text-center'>{error}</div>;

	return (
		<div className='p-8 max-w-7xl mx-auto'>
			<div className='flex justify-between items-center mb-6'>
				<h1 className='text-2xl font-bold'>Driver Fleet</h1>
				<Link
					href='/'
					className='text-blue-600 hover:underline'>
					Back to Dashboard
				</Link>
			</div>

			<div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
				{drivers.map((driver) => (
					<div
						key={driver.id}
						className='p-6 bg-white border border-gray-200 rounded-xl shadow-sm'>
						<div className='flex justify-between items-start mb-4'>
							<div>
								<h3 className='text-lg font-bold text-gray-900'>
									{driver.name}
								</h3>
								<p className='text-gray-500'>{driver.phone}</p>
							</div>
							<span
								className={`px-2 py-1 rounded text-xs font-bold ${driver.isActive ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
								{driver.isActive ? 'ACTIVE' : 'OFFLINE'}
							</span>
						</div>
						<button
							onClick={() => toggleAvailability(driver.id, driver.isActive)}
							className={`w-full py-2 rounded-lg font-medium transition-colors ${
								driver.isActive ?
									'bg-red-50 text-red-600 hover:bg-red-100'
								:	'bg-indigo-50 text-indigo-600 hover:bg-indigo-100'
							}`}>
							{driver.isActive ? 'Set Offline' : 'Set Available'}
						</button>
					</div>
				))}
			</div>
		</div>
	);
}
