import Image from 'next/image'

export default function CollectionsCard({ item }) {
	return (
		<div className='collections-card'>
			<Image
				src={item.image}
				fill
				className='image collections-card__image'
				alt={item.name}
				draggable={false}
			/>

			<div className='collections-card__info'>
				<p className='collections-card__info-title'>{item.name}</p>
				{item.year && (
					<p className='collections-card__info-year'>{item.year}</p>
				)}
			</div>

			<div className='collections-card__count'>
				<p>{item.count}</p>
				<Image
					src='/list.svg'
					width={46}
					height={46}
					alt='list'
					className='image'
					draggable={false}
				/>
			</div>
		</div>
	)
}
