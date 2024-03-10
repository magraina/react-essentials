import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';
import { useState } from 'react';
import Tabs from './Tabs';

export default function Examples() {
	const [ selectedTopic, setSelectedTopic ] = useState();

	function handleSelect(selectedButton) {
		setSelectedTopic(selectedButton);
	}

	return (
		<Section id='examples' heading='Examples'>
			<Tabs
				tabButtons={
				Object.entries(EXAMPLES).map(([key, value]) => (
					<TabButton key={key}
						onSelect={() => handleSelect(key)}
						isActive={selectedTopic === key}
					>
						{value.title}
					</TabButton>
				))
			}>
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
			</Tabs>
		</Section>
	);
}