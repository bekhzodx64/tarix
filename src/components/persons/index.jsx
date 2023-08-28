'use client'

import SectionHeader from '../shared-components/section-header'
import PersonItem from './components/person-item'

import { Swiper, SwiperSlide } from 'swiper/react'

import { persons } from '@/data'

export default function Persons() {
	return (
		<section className='persons container'>
			<SectionHeader title='Топ 10 выдающихся личностей x тема' />

			<div className='persons-slider'>
				<Swiper
					spaceBetween={27}
					slidesPerView={4}
					breakpoints={{
						768: {
							slidesPerView: 5,
						},
						1024: {
							slidesPerView: 6,
						},
						1280: {
							slidesPerView: 8,
						},
						1680: {
							slidesPerView: 10,
						},
					}}
				>
					{persons.map((person, index) => (
						<SwiperSlide key={index}>
							<PersonItem {...{ person }} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	)
}
