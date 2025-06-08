# Contact Form Setup

## Current Status
The contact form is currently running in **demo mode**. When you submit the form, it will:
- Show a success message
- Clear the form fields
- Log the form data to the browser console
- NOT actually send an email

## To Enable Real Email Sending

### Option 1: EmailJS (Recommended)
1. Go to https://www.emailjs.com/ and create a free account
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template
4. Get your Service ID, Template ID, and Public Key
5. Update the `.env` file with your real credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_actual_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```
6. In `Contact.tsx`, uncomment the EmailJS import and uncomment the EmailJS code section
7. Comment out the demo mode section

### Option 2: Formspree
1. Go to https://formspree.io/ and create an account
2. Create a new form and get your form endpoint
3. Replace the form submission logic with a simple POST request to your Formspree endpoint

### Option 3: Backend API
Create your own backend API to handle form submissions and email sending.

## Demo Mode Testing
You can test the current demo mode by:
1. Filling out the contact form
2. Clicking "Send Message"
3. Check the browser console (F12) to see the captured form data
4. The form will show a success message and reset

The demo mode simulates the real functionality without actually sending emails.
