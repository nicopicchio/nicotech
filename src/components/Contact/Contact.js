function Contact() {
	return (
		<form id='contact-form' action='https://formsubmit.co/nico@nicotech.dev' method='POST'>
			<h2 className='contact-form-title'>Get in touch!</h2>
			<label className='form-label'>
				Name<span className='required-field'>*</span>
			</label>
			<input type='text' name='name' required />
			<label className='form-label'>
				Email<span className='required-field'>*</span>
			</label>
			<input type='email' name='email' required />
			<label className='form-label'>Phone number</label>
			<input type='text' />
			<label className='form-label'>
				Enquiry<span className='required-field'>*</span>
			</label>
			<textarea type='text' name='message' cols='40' rows='10' required />
			<div id='contact-form-button'>
				<button type='submit' value='submit'>
					Submit
				</button>
			</div>
		</form>
	);
}

export default Contact;
