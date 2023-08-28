import Banner from '@/components/banner'
import Collections from '@/components/collections'
import Persons from '@/components/persons'
import Search from '@/components/shared-components/search'

export default function Home() {
	return (
		<>
			<Search />
			<Banner />
			<Persons />
			<Collections />
		</>
	)
}
