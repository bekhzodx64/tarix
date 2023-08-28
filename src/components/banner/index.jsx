'use client'

import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

export default function Banner() {
	return (
		<div className='container banner'>
			<div className='banner-left banner_first'>
				<Image
					src='/banner/1.jpg'
					alt='banner'
					fill
					className='image'
					draggable={false}
				/>

				<div className='banner-info'>
					<p className='banner-info__title'>Юрский период</p>
					<p className='banner-info__year'>X л. до н.э</p>
				</div>
			</div>

			<div className='banner-right'>
				<div className='banner_second'>
					<Image
						src='/banner/2.png'
						alt='banner'
						fill
						className='image'
						draggable={false}
					/>

					<div className='banner-info'>
						<p className='banner-info__title'>Юрский период</p>
						<p className='banner-info__year'>X л. до н.э</p>
					</div>
				</div>
				<div className='banner_third'>
					<Image
						src='/banner/3.jpg'
						alt='banner'
						fill
						className='image'
						draggable={false}
					/>

					<div className='banner-info'>
						<p className='banner-info__title'>Юрский период</p>
						<p className='banner-info__year'>X л. до н.э</p>
					</div>
				</div>
			</div>

			<div className='banner-mobile'>
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
					style={{ borderRadius: 10 }}
				>
					<SwiperSlide>
						<div className='banner-mobile__container'>
							<Image
								src='/banner/1.jpg'
								alt='banner'
								fill
								className='image'
								draggable={false}
							/>

							<div className='banner-info'>
								<p className='banner-info__title'>Юрский период</p>
								<p className='banner-info__year'>X л. до н.э</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='banner-mobile__container'>
							<Image
								src='/banner/2.png'
								alt='banner'
								fill
								className='image'
								draggable={false}
							/>

							<div className='banner-info'>
								<p className='banner-info__title'>Юрский период</p>
								<p className='banner-info__year'>X л. до н.э</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='banner-mobile__container'>
							<Image
								src='/banner/3.jpg'
								alt='banner'
								fill
								className='image'
								draggable={false}
							/>

							<div className='banner-info'>
								<p className='banner-info__title'>Юрский период</p>
								<p className='banner-info__year'>X л. до н.э</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	)
}
