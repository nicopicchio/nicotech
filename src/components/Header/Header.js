import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<div className='logo'>
				<h1>
					nico<span className='logo-span'>tech</span>
				</h1>
			</div>
			<nav>
				<ul className='navigation'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/portfolio'>Portfolio</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
