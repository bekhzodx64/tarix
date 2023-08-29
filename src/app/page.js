import Banner from '@/components/banner'
import Biography from '@/components/biography'
import Collections from '@/components/collections'
import Persons from '@/components/persons'
import Search from '@/components/shared-components/search'

export default function Home() {
	return (
		<>
			<Search />
			<Banner />
			<Persons />
			<Biography />
			<Collections />
		</>
	)
}
