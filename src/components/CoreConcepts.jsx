
import { CORE_CONCEPTS } from '../data';
import CoreConcept from './CoreConcept';
import Section from './Section';

export default function CoreConcepts() {
	return (
	<Section id='core-concepts' heading='Core Concepts'>
		<ul>
			{ CORE_CONCEPTS.map((value, index) => (
				<CoreConcept key={index}
					{ ...value }
				/>
			)) }
		</ul>
	</Section>
	)
}
