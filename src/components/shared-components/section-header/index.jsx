import { SeeMore } from '@/components/buttons'

export default function SectionHeader({ title }) {
	return (
		<div className='section-header'>
			<h2>{title}</h2>

			<SeeMore />
		</div>
	)
}
