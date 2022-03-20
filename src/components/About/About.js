import profileImg from '../../images/profile-photo.jpg';

function About() {
	return (
		<div id='about-section'>
			<div className='about-me-container'>
				<h3 className='about-me-title'>About me</h3>
				<p className='about-me-text'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
					finibus lacus. Praesent elementum, tellus et accumsan malesuada, urna
					tortor luctus libero, in molestie urna nulla ac mauris. Nulla vel
					pharetra massa, in faucibus lectus. Cras quis condimentum ligula, vel
					pharetra lorem. In lacus ipsum, varius et erat sed, viverra varius
					sapien. Sed in feugiat dui. Ut congue erat id nisi dapibus aliquam
					vitae eget mauris. In hac habitasse platea dictumst. Vestibulum in
					bibendum est. Vivamus sit amet mauris ac enim ultrices suscipit vel
					eget risus.
				</p>
			</div>
			<div className='profile-image-container'>
				<img
					src={profileImg}
					alt='profile photo'
					className='profile-image'
					width='510px'
				/>
			</div>
		</div>
	);
}

export default About;
