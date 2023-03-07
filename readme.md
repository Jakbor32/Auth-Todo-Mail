## A school project for a subject credit

### Technologies
The project was built using several technologies and tools. Auth0 was used for user login and registration, which ensures a high level of security. 
Firebase Firestore Cloud was used for data storage. Each user has their own collection in the database, ensuring privacy and data security. The user can store their independent tasks to be completed and there is no way to read this data after logging out.


Tailwind CSS library was used for styling, which allows for quick and easy creation of responsive user interfaces. 
The project also includes the email.js mailing service, which allows users to send emails directly from the contact form on the website to my email at borowyjakub32@gmail.com.


### Task list

- [x] Implementation of user login and registration using Auth0
- [x] Collecting and storing user data using Firebase Firestore Cloud
- [x] Implementation of email.js mailing service
- [x] Creating a responsive user interface using Tailwind CSS library
- [x] Implementation of a 404 page
- [x] Creating a profile page that retrieves user data from Auth0
- [x] Implementation of a contact page with a contact form
- [x] Implementation of page navigation using React Router
- [x] Embedding the page on vercel

### Responsive design

The application is fully responsive and adjusts to different screen sizes, using modern menu on mobile devices. Page navigation is done using React Router.

### Used libraries

- Auth0, https://auth0.com/
- Firebase Firestore Cloud, https://firebase.google.com/
- Tailwind CSS, https://tailwindcss.com/
- Vite, https://vitejs.dev/
- Email.js, https://www.emailjs.com/

### Check out my project here

https://auth-todo-mail.vercel.app/

### How to install
1. Run the `npm create vite@latest`
2. Configure Tailwind,
3. Configure Auth0 with connection settings to your address,
4. Configure email.js with your application,
5. Configure Firebase with Auth0 authorization.

### Available pages

* Todolist - a page where tasks can be added to be done. After adding a task, its content is saved in the database. Tasks can be deleted or their content changed.
* Contact form - a page with a contact form where you can fill in your details and write a message to the owner of the application. Messages are sent using the email.js service.
* Profile - a page with user profile data such as name, surname, email, and country.
* Callback page - a 404 page that appears when the user enters the wrong page address.
* Home - a page where login or registration is located, which redirects to Auth0.
