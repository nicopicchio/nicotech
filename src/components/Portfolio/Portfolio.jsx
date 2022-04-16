import cubeSampleImg from '../../images/cube-sample.jpg';

function Portfolio() {
	return (
		<div id='portfolio-container'>
			<div className='portfolio-card'>
				<div>
					<img
						className='portfolio-card-img'
						src={cubeSampleImg}
						alt='sample'
					/>
				</div>
				<div className='portfolio-card-descr'>
					<h2>Lorem Ipsum</h2>
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
					<h2>Lorem Ipsum</h2>
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
					<h2>Lorem Ipsum</h2>
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
					<h2>Lorem Ipsum</h2>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
