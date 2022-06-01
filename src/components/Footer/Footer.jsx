import githubLogo from '../../images/github-logo.svg';
import linkedInLogo from '../../images/linkedin-logo.png';

function Footer() {
	return (
		<footer>
			<div className='footer-left'>
				{/* <p>Copyright nicotech 2022. All rights reserved.</p> */}
			</div>
			<div className='footer-right'>
				<a
					href='https://github.com/nicopicchio'
					target='_blank'
					rel='noreferrer'>
					<img
						className='social-icon-github'
						src={githubLogo}
						alt='github logo'
						width='40px'
					/>
				</a>
				<a
					href='https://www.linkedin.com/in/nicolapicchio/'
					target='_blank'
					rel='noreferrer'>
					<img
						className='social-icon-linkedin'
						src={linkedInLogo}
						alt='linkedin logo'
						width='40px'
					/>
				</a>
			</div>
		</footer>
	);
}

export default Footer;
