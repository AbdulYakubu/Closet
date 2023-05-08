#GLAMS-CLOSET

#Steps

1. Create a react-app
2. Create a Git-repository named Glams-Closet
3. Added README.md file
4. Added a new component called data.js

   1. created a new file in the src folder called data.js
   2. I created a variable called data using const
   3. I created an array which include an object called Products.
   4. The object consist of the following;
      1. name
      2. slug
      3. category
      4. Image
      5. Price
      6. countInStock
      7. brand
      8. ratings
      9. numReviews
      10. Description

5. I imported the data component into the App.js file

6. Added routing

   1. npm i react-router-dom
   2. I created route for home screen
   3. I created route for product screen

7. I created Node.js Server

   1. I run npm init in root folder.
   2. I Updated package.json set type: module
   3. I added .js to imports.
   4. npm install express
   5. I created server.js
   6. Added sart command as node backend/server.js.
   7. Require express
   8. I created route for / return backend is ready
   9. I moved products.js from fronted to backend.
   10. I ceated route for /API/ products
   11. I returned products.
   12. I run npm start.

8. Fetch products from the backend.

   1. set proxy in package.json.
   2. npm install axios.
   3. use state hook.
   4. use effect hook.
   5. use reducer hook.

9. Manage state By Reducer Hook

   1. define reducer
   2. update fetch data
   3. get state from usereducer

10. Added bootstrap UI framework.

    1. npm install react-bootstrap bootstrap
    2. updated App.js

11. I created Product and Rating component.

    1. Create Rating component.
    2. Create Product component.
    3. I used Rating component in Product component.

12. I created Product Details Screen.

    1. I fetched product from the backend.
    2. Created 3 columns for image, info and action.

13. I created a Loading and Message Components.

    1. I created a Loading Component.
    2. I used spinner component.
    3. I created a Message Component.
    4. I created utils.js to define getError function.

14. Implemented Add to cart.

    1. Create React Context.
    2. I defined a reducer.
    3. I created the store provider.
    4. implemented add to cart button click handler.

15. I completed Add to cart

    1. I checked exist Item in the cart.
    2. I checked count in stock in backend.

16. I created Cart Screen.
    1. I created 2 columns.
    2. I displayed item list.
    3. I created action column.

17. I completed the Cart Screen
    1. click handler for increase and decrease item.
    2. click handler for remove item.
    3. click handler for checkout.

18. I created signin Screen.
    1. I created sign in form.
    2. Added e-mail and password.
    3. Added signin button.

19. I connected to MongoDB Database
    1. I created atlas monogodb database.
    2. I installed local mongodb database.
    3. npm install mongoose.
    4. I connected to mongodb database.
    