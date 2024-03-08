import Header from './components/Header/Header';
import { EXAMPLES, CORE_CONCEPTS } from './data';
import CoreConcept from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';


function App() {
	const [ selectedTopic, setSelectedTopic ] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
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
				{!selectedTopic && <p>Please select a topic.</p>}
				{selectedTopic && <div id='tab-content'>
					<h3>{EXAMPLES[selectedTopic].title}</h3>
					<p>{EXAMPLES[selectedTopic].description}</p>
					<pre>
						<code>
							{EXAMPLES[selectedTopic].code}
						</code>
					</pre>
				</div>}
			</section>
		</main>
	</div>
	);
}

export default App;
