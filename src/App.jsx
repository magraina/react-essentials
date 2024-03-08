import Header from './components/Header/Header';
import { CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';


function App() {
	let tabContent = 'Please click a button';

	function handleSelect(selectedButton) {
		tabContent = selectedButton;
	}
	return (
	<div>
		<Header/>
		<main>
			<h2>Core Concepts</h2>
			<section id='core-concepts'>
				<ul>
					{ CORE_CONCEPTS.map((value, index) => (
						<CoreConcept key={index}
							title={ value.title }
							description={ value.description }
							image={ value.image }
						/>
					)) }
				</ul>
			</section>
			<section id='examples'>
				<h2>Examples</h2>
				<menu>
					<TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
					<TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
					<TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
					<TabButton onSelect={() => handleSelect('state')}>State</TabButton>
				</menu>
				{tabContent}
			</section>
		</main>
	</div>
	);
}

export default App;