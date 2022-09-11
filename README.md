# WineCatalog
JavaScript single page application made with Page JS and Lit HTML
## :speech_balloon: Concept
An application with a main functionality to add, edit and delete products. Also, with an option to like, unlike and make comments depending on user’s authorization. 
REST service has been used and CRUD operations - GET, POST, PUT, DELETE have been implemented.
## :hammer_and_pick: Technologies used 
* Main - JavaScript, CSS, HTML
* Client-side router - Page.js: https://visionmedia.github.io/page.js
* Client-side rendering - Lit HTML: https://lit.dev
* Module bundler - WebPack: https://webpack.js.org
## :information_source: Structure
The application has the following parts:
### Home page
* Guests can visit all other sections depending on the authentication status
* They are prompted to log in in order to use the full functionality of the app.
### Catalog
* Pagination on server side has been implemented 
* When logged in the user can check the product details
    * If he is an owner (i.e. has created the item) he can edit and delete the item
    * If he is NOT an owner he can like / unlike and make comments
* If not logged in the quest can only see a list of products
### Login
* To  use the full functionality, any guest should log in first
* A mistake appears in case of an error
* The application has two users preliminary registered which can be used for immediate testing: 
    * email: "ivan@abv.bg", password: 123456
    * email: "ana@abv.bg", password: 123456
### Register 
* In case the guest has no account, he can register at the Register Page
* A mistake appears in case of an error
### Search
* Items can be searched by product name
### Create wine
* If logged in, the user can add wine to the catalog 
* All fields in the form are compulsory 
* If any form input is not filled in, a mistake appears indicating an error
### My wines
* From this section every logged in user can see the products he has added to the catalog 
* He can also edit and delete his wines from here
## :paperclips: Project link on Internet
* Now available at :point_right: : https://wine-catalog-project.web.app/