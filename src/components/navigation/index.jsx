import Image from 'next/image'
import Link from 'next/link'

export default function Navigation() {
	return (
		<nav className='navigation container'>
			<ul className='navigation-list'>
				<li className='navigation-list__item'>
					<Link href='/'>
						<Image
							src='/main.svg'
							width={20}
							height={20}
							alt='home'
						/>
						<p>Главная</p>
					</Link>
				</li>
				<li className='navigation-list__item'>
					<Link href='/'>
						<Image
							src='/collection.svg'
							width={20}
							height={20}
							alt='collections'
						/>
						<p>Подборки</p>
					</Link>
				</li>
				<li className='navigation-list__item'>
					<Link href='/'>
						<Image
							src='/events.svg'
							width={20}
							height={20}
							alt='events'
						/>
						<p>Ивенты</p>
					</Link>
				</li>
				<li className='navigation-list__item'>
					<Link href='/'>
						<Image
							src='/about.svg'
							width={20}
							height={20}
							alt='about'
						/>
						<p>О нас</p>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
