'use client'

import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import SectionHeader from '../shared-components/section-header'

export default function Biography() {
	return (
		<div className='container biography'>
			<SectionHeader title='Биография' />

			<div className='biography-slider'>
				<Swiper
					slidesPerView={1}
					spaceBetween={4}
				>
					<SwiperSlide>
						<div className='biography-slider__item first-grid'>
							<div className='first'>
								<Image
									src='/biography/1.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>

								<div className='biography-slider__info'>
									<p>Мэрлин Монро</p>
									<p>1926-1962 г.</p>
								</div>
							</div>
							<div className='second'>
								<Image
									src='/biography/2.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>

								<div className='biography-slider__info'>
									<p>Генри Форд</p>
									<p>1863-1947 г.</p>
								</div>
							</div>
							<div className='third'>
								<Image
									src='/biography/3.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>

								<div className='biography-slider__info'>
									<p>Никола Тесла</p>
									<p>1856-1943 г.</p>
								</div>
							</div>
							<div className='fourth'>
								<Image
									src='/biography/4.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>
								<div className='biography-slider__info'>
									<p>Людвиг ван Бетховен</p>
									<p>1770-1827 г.</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='biography-slider__item second-grid'>
							<div className='first'>
								<Image
									src='/biography/1.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>

								<div className='biography-slider__info'>
									<p>Мэрлин Монро</p>
									<p>1926-1962 г.</p>
								</div>
							</div>
							<div className='second'>
								<Image
									src='/biography/2.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>

								<div className='biography-slider__info'>
									<p>Генри Форд</p>
									<p>1863-1947 г.</p>
								</div>
							</div>
							<div className='third'>
								<Image
									src='/biography/3.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>

								<div className='biography-slider__info'>
									<p>Никола Тесла</p>
									<p>1856-1943 г.</p>
								</div>
							</div>
							<div className='fourth'>
								<Image
									src='/biography/4.jpg'
									fill
									alt='biography'
									draggable={false}
									className='image'
								/>
								<div className='biography-slider__info'>
									<p>Людвиг ван Бетховен</p>
									<p>1770-1827 г.</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}
