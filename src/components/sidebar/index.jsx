import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
	return (
		<aside className='sidebar'>
			<div className='sidebar-buttons'>
				<button
					className='button'
					type='button'
				>
					<Image
						src='/burger.svg'
						width={40}
						height={40}
						alt='burger'
						draggable={false}
						className='image'
					/>
				</button>

				<button
					className='button'
					type='button'
				>
					<Image
						src='/search.svg'
						width={40}
						height={40}
						alt='search'
						draggable={false}
						className='image'
					/>
				</button>
			</div>

			<Link href='/'>
				<Image
					height={377}
					width={64}
					src='/logo.svg'
					alt='logo'
					draggable={false}
					className='image'
				/>
			</Link>

			<Image
				height={48}
				width={22}
				src='/year.svg'
				alt='year'
				draggable={false}
				className='image'
			/>
		</aside>
	)
}
