import React from 'react';

// Import components
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Recommendations from './components/Recommendations';
import Contact from './components/Contact';

const App = () => {
	return (
		<main className='text-gray-400 bg-gray-900 body-font'>
			<Navbar />
			<About />
			<Projects />
      <Skills />
      <Recommendations />
			<Contact />
		</main>
	);
};

export default App;
