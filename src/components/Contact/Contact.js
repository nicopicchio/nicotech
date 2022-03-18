function Contact() {
	return (
		<form id='contact-form'>
			<h2 id='contact-form-title'>Contact me!</h2>
			<label className='form-label'>
				Name<span className='required-field'>*</span>
			</label>
			<input type='text' required />
			<label className='form-label'>
				Email<span className='required-field'>*</span>
			</label>
			<input type='email' required />
			<label className='form-label'>Phone number</label>
			<input type='text' />
			<label className='form-label'>
				Enquiry<span className='required-field'>*</span>
			</label>
			<textarea type='text' name='enquiry' cols='40' rows='10' required />
			<div id='contact-form-button'>
				<button type='submit' value='submit'>
					Submit
				</button>
			</div>
		</form>
	);
}

export default Contact;
