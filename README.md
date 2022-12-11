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
![home](https://user-images.githubusercontent.com/102145445/206912427-02823586-dc8c-47e8-99b8-c197977a7b26.jpg)
* Guests can visit all other sections depending on the authentication status
* They are prompted to log in in order to use the full functionality of the app
### Catalog
![catalog](https://user-images.githubusercontent.com/102145445/206912574-a73fdddb-f908-4fad-b314-9b967ba937d8.jpg)
* Pagination on server side has been implemented 
* When logged in the user can check the product details
    * If he is an owner (i.e. has created the item) he can edit and delete the item
    * If he is NOT an owner he can like / unlike and make comments
* If not logged in the quest can only see a list of products
![edit-delete](https://user-images.githubusercontent.com/102145445/206917346-864c7790-0ae4-4d28-807f-837701adbd56.jpg)

### Login
![login](https://user-images.githubusercontent.com/102145445/206912735-7c750db0-b702-4b69-a4e6-78f3d587950f.jpg)
* To  use the full functionality, any guest should log in first
* A mistake appears in case of an error
* The application has two users preliminary registered which can be used for immediate testing: 
    * email: "ivan@abv.bg", password: 123456
    * email: "ana@abv.bg", password: 123456
### Register 
* In case the guest has no account, he can register at the Register Page
* A mistake appears in case of an error
### Search
![search](https://user-images.githubusercontent.com/102145445/206912914-f7122418-892b-46e6-bf1f-53ead26d2851.jpg)
* Items can be searched by product name
### Create wine
![create](https://user-images.githubusercontent.com/102145445/206913025-75eacede-6a01-4434-bda1-6a0fea31dcc6.jpg)
* If logged in, the user can add wine to the catalog 
* All fields in the form are compulsory 
* If any form input is not filled in, a mistake appears indicating an error
### My wines
![my](https://user-images.githubusercontent.com/102145445/206913155-24250e12-e6a4-45a1-a655-b94e42c20597.jpg)
* From this section every logged in user can see the products he has added to the catalog 
* He can also edit and delete his wines from here
## :paperclips: Project link on Internet
* Now available at :point_right: : https://wine-catalog-project.web.app/
