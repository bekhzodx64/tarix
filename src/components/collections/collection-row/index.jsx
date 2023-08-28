'use client'

import SectionHeader from '@/components/shared-components/section-header'
import { Swiper, SwiperSlide } from 'swiper/react'
import CollectionsCard from '../components/collections-card'

export default function CollectionRow({ sectionTitle, data }) {
	return (
		<div className='collections-row'>
			<SectionHeader title={sectionTitle} />

			<div>
				<Swiper
					spaceBetween={25}
					slidesPerView={1.4}
					breakpoints={{
						1024: {
							slidesPerView: 2.4,
						},
						1680: {
							slidesPerView: 3.3,
						},
					}}
					// style={{ overflow: 'visible' }}
				>
					{data.map((item, index) => (
						<SwiperSlide key={index}>
							<CollectionsCard {...{ item }} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	)
}
