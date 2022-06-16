import cubeSampleImg from '../../assets/cube-sample.jpg';
import continentalImg from '../../assets/continental-screenshot-logo.png';
import carbonFootprintImg from '../../assets/carbon-footprint-screenshot.png';

function Portfolio() {
	return (
		<div id='portfolio-container'>
			<a
				className='portfolio-card-link'
				href='https://thecontinentalnetwork.netlify.app/'
				target='_blank'
				rel='noreferrer'>
				<div className='portfolio-card'>
					<div>
						<img
							className='portfolio-card-img'
							src={continentalImg}
							alt='sample'
						/>
					</div>
					<div className='portfolio-card-descr'>
						<h4>The Continental Network</h4>
					</div>
				</div>
			</a>
			<a
				className='portfolio-card-link'
				target='_blank'
				rel='noreferrer'
				href='https://github.com/nicopicchio/carbon-footprint'>
				<div className='portfolio-card'>
					<div className='portfolio-card-img'>
						<img
							className='portfolio-card-img'
							src={carbonFootprintImg}
							alt='sample'
						/>
					</div>
					<div className='portfolio-card-descr'>
						<h4>Carbon Footprint Checker</h4>
					</div>
				</div>
			</a>
			<div className='portfolio-card'>
				<div className='portfolio-card-img'>
					<img
						className='portfolio-card-img'
						src={cubeSampleImg}
						alt='sample'
					/>
				</div>
				<div className='portfolio-card-descr'>
					<h4>Lorem Ipsum</h4>
				</div>
			</div>
			<div className='portfolio-card'>
				<div className='portfolio-card-img'>
					<img
						className='portfolio-card-img'
						src={cubeSampleImg}
						alt='sample'
					/>
				</div>
				<div className='portfolio-card-descr'>
					<h4>Lorem Ipsum</h4>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
