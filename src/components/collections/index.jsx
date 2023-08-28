import CollectionRow from './collection-row'

import { art, composers, diseases, war } from '@/data'

export default function Collections() {
	return (
		<section className='collections container'>
			<h2 className='collections-title'>Подборки</h2>

			<CollectionRow
				sectionTitle='Искусство'
				data={art}
			/>
			<CollectionRow
				sectionTitle='Войны'
				data={war}
			/>
			<CollectionRow
				sectionTitle='Болезни'
				data={diseases}
			/>
			<CollectionRow
				sectionTitle='Композиторы'
				data={composers}
			/>
		</section>
	)
}
