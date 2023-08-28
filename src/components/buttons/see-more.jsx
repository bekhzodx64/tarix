import Image from 'next/image'

export default function SeeMore() {
	return (
		<button
			type='button'
			className='button button-more'
		>
			<p>Смотреть всё</p>

			<Image
				src='/right-arrow.svg'
				width={24}
				height={24}
				alt='right-arrow'
				className='image'
			/>
		</button>
	)
}
