import Header from './components/Header/Header';
import CoreConcepts from './components/CoreConcepts';
import { Fragment } from 'react';
import Examples from './components/Examples';


function App() {
	

	return (
	<Fragment>
		<Header/>
		<main>
			<CoreConcepts/>
			<Examples/>
		</main>
	</Fragment>
	);
}

export default App;
