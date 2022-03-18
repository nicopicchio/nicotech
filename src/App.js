import Header from './components/Header/Header';
import Main from './components/Main/Main';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<div className='home-container'>
				<Header />
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/about' element={<About />} />
					<Route path='/portfolio' element={<Portfolio />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
