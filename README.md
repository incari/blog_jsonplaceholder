# Welcome

Hey wake up! 

Here is a proyect that I am working on. It's a v.1 but with a lot of ideas that I want to add.
Hope you enjoy and learn something new =)

## Other libraries

To speed up the process of building this app, I used the following external libraries:

- Chakra-ui : A component library with style props with focus in the accessibility
- Formik: A form handler that I used when adding a new comment
- React-Icons: To use almost all the icons library available
- React-router: For routing 
- Jest: For testing

## About the App

I designed it to be an movile-only app.  

It is not unknown that more and more people are putting aside their PC / laptop to only use their mobile and many modern applications are taking the concept of 'mobile first' to 'mobile only' such as TikTok, Instagram, Twitter or Medium.

Being a blogging and commenting app that is normally navigated vertically, I decided to make it mobile only


It has 4 main screens.

- Home: Where the list of existing publications appears.
- Detail page: When you navigate inside a publication you can also see its comments and create new comments; either as a guest or logged in.
- My publications: You will see the list of all your posts, only if you have already logged in, if not, it will send you to the configuration page.
- Settings: Where you can log in with one of the 10 enabled users. And if you are already logged in, you can log out.


## How does it work

Most of the content come directly from the API, but the user logged-in and new comments of each post, are stored in the 'localstorage' because even though I am sending information to the API to create a new comment, it is not really stored in the database, so I had to simulate it so that you have the feeling that it is.


## Next steps

The following I would do to continue advancing in this app:

- Create transitions using libraries like Motion for a modern feel.
- Create new post, it would be similar to creating a new comment, but to advance in other topics I left it aside.
- Improve controls to create /edit / create / delete both post and comments.
- Use an account creation / login control system like Firebase.
- Add analitycs.
- Handling the PWA 

And last but not least, more testing

### Goodbye
Thank you for reading 
Best, Martín.
