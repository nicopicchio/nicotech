import heroImg from '../../assets/hero-img.svg';

function Main() {
	return (
		<main>
			<div className='hero-image'>
				<img className='hero-illustration' src={heroImg} alt='hero' width='700px' />
			</div>
			<div className='hero-text'>
				<h2 className='hero-message who-am-i'>Hi, I'm Nico.</h2>
				<h2 className='hero-message'>
					I am full stack developer based in the UK.
				</h2>
			</div>
		</main>
	);
}

export default Main