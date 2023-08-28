import Image from 'next/image'

export default function Search() {
	return (
		<div className='container'>
			<div className='search'>
				<input
					type='text'
					placeholder='Search'
				/>

				<button
					type='button'
					className='button'
				>
					<Image
						src='/search.svg'
						width={20}
						height={20}
					/>
				</button>
			</div>
		</div>
	)
}
