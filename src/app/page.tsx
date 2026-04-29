/** @format */
import Link from 'next/link';

export default function Dashboard() {
	return (
		<div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8'>
			<header className='mb-12 text-center'>
				<h1 className='text-4xl font-extrabold text-gray-900 mb-2'>
					simpDelivery Admin
				</h1>
				<p className='text-gray-600'>
					Manage your fleet and orders efficiently.
				</p>
			</header>

			<div className='grid gap-8 w-full max-w-6xl md:grid-cols-3'>
				<Link
					href='/orders'
					className='group block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-blue-500'>
					<div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>
						📦
					</div>
					<h2 className='text-xl font-bold text-gray-900 mb-2'>Orders</h2>
					<p className='text-gray-500'>
						View current orders, track progress, and update status.
					</p>
					<div className='mt-4 text-blue-600 font-semibold inline-flex items-center'>
						Open Management →
					</div>
				</Link>

				<Link
					href='/drivers'
					className='group block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-blue-500'>
					<div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>
						🚚
					</div>
					<h2 className='text-xl font-bold text-gray-900 mb-2'>Drivers</h2>
					<p className='text-gray-500'>
						Monitor driver availability and manage your fleet list.
					</p>
					<div className='mt-4 text-blue-600 font-semibold inline-flex items-center'>
						Open Management →
					</div>
				</Link>

				<Link
					href='/root-areas'
					className='group block p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all hover:border-blue-500'>
					<div className='text-4xl mb-4 group-hover:scale-110 transition-transform'>
						🗺️
					</div>
					<h2 className='text-xl font-bold text-gray-900 mb-2'>Areas</h2>
					<p className='text-gray-500'>
						Manage service coverage and delivery pricing.
					</p>
					<div className='mt-4 text-blue-600 font-semibold inline-flex items-center'>
						Open Management →
					</div>
				</Link>
			</div>
		</div>
	);
}
