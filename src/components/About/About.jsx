import profileImg from '../../images/profile-photo.jpg';

function About() {
	return (
		<div id='about-section'>
			<div className='about-me-container'>
				<h3 className='about-me-title'>About</h3>
				<p className='about-me-text'>
					My name is Nico Picchio and I am a full stack software developer based
					in the Midlands of the UK.
				</p>
				<p className='about-me-text'>
					I am extremely passionate about tech, problem solving and creating
					things for the web.
				</p>
				<p className='about-me-text'>
					My love with tech sparked at the end of the 80's when I was given my
					first computer, an Apple Macintosh Plus (which I still own) and that
					was it.
				</p>
				<p className='about-me-text'>
					I started teaching myself to code in early 2020 and I was instantly
					hooked. Writing simple lines of code suddenly becoming usable art,
					combined with my love for technology, design and photography were good
					enough reasons to make me realise that I wanted to leave my career in
					Intensive Care Nursing and switch to programming. And the rest is
					history.
				</p>
			</div>
			<div className='profile-image-container'>
				<img
					src={profileImg}
					alt='headshot'
					className='profile-image'
					width='510px'
				/>
			</div>
		</div>
	);
}

export default About;
