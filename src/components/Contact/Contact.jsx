function Contact() {
	return (
		<form id='contact-form' action='https://formsubmit.co/nicolapicchio@gmail.com' method='POST'>
			<h2 className='contact-form-title'>Get in touch!</h2>
			<label className='form-label'>
				Name<span className='required-field'>*</span>
			</label>
			<input className='form-input' type='text' name='name' required />
			<label className='form-label'>
				Email<span className='required-field'>*</span>
			</label>
			<input className='form-input' type='email' name='email' required />
			<label className='form-label'>Phone</label>
			<input className='form-input' type='text' />
			<label className='form-label'>
				Enquiry<span className='required-field'>*</span>
			</label>
			<textarea className='message-input' type='text' name='message' cols='40' rows='10' required />
			<div id='contact-form-button-container'>
				<button type='submit' value='submit'>
					Submit
				</button>
			</div>
		</form>
	);
}

export default Contact;
