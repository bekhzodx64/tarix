import Image from 'next/image'

export default function PersonItem({ person }) {
	return (
		<div className='persons-item'>
			<div className='persons-item__avatar'>
				<Image
					src={person.avatar}
					fill
					alt={person.name}
					draggable={false}
					className='image '
				/>
			</div>
			<h3>{person.name}</h3>
		</div>
	)
}
