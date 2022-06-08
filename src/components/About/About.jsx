import profileImg from '../../assets/profile-photo.jpg';

function About() {
	return (
		<div id='about-section'>
			<div className='about-me-container'>
				<p className='about-me-text'>
					Hey! My name is Nico Picchio and I am a full stack software developer
					based in the Midlands, UK.
				</p>
				<p className='about-me-text'>
					I am extremely passionate about tech, problem solving and creating
					things for the web.
				</p>
				<p className='about-me-text'>
					In the late 80's I was given my first computer, an Apple Macintosh
					Plus, which I still proudly own and which sparked my love for
					technology. I have been hooked ever since.
				</p>
				<p className='about-me-text'>
					I started teaching myself to code in 2020 and I was instantly inspired
					by it. Writing simple lines of code which create immediately usable
					art, combined with my love for tech, design and photography were solid
					reasons which inspired me to be a software developer.
				</p>
			</div>
			<div className='profile-image-container'>
				<img
					src={profileImg}
					alt='headshot'
					className='profile-image'
					width='500px'
				/>
				<a href='src/assets/nico-picchio-resume.pdf' className='cv-download-link' download>
					Download my CV
				</a>
			</div>
		</div>
	);
}

export default About;
