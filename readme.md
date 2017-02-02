# Max Entertainment

![Movies](http://i.giphy.com/3o6Ztl7RvfwCp9mqhW.gif)

## Learning Objectives

* AJAX and API reps with query parameters
* Reading API docs
* Templating with Handlebars.js

Congratulations, Max Gershowitz was supremely impressed with the Shake's Peers website you built for him! Turns out Shake's Peers was just an audition - Max wants to hire you again!

One of The Gersh's side hustles is running a legally questionable independent movie theater that screens movies from his personal torrent collection. Hmmm... seems unsavory, but as hungry junior web developers we'll have to look the other way for now.

Max wants a killer website that will help him manage his "independent" theater. The website should allow Max to search for movies and add it to his list of currently playing movies at the Max Entertainment Theater. Your website will make use of the **Open Movie Database API (OMDb API)** for movie data, AJAX for fetching data, and a combination of jQuery and Handlebars.js for templating that data onto the DOM.

While functionality is critical, **design** is also important. Max insists that his website must accommodate his exquisite taste: classic post-modern retro (jk - just make it look nice).

## Resources

[OMDb API Reference](https://www.omdbapi.com/)
[General jQuery AJAX](http://api.jquery.com/jquery.ajax/)
[Handlebars.js](http://handlebarsjs.com/)

## Set Up

No starter code has been provided. Create your own HTML, CSS, and JavaScript files, link them, and link **jQuery** and **Handlebars.js**.

## Completion

Create a website that meets all of Max's requirements. We'll also be considering style/design. Once your AJAX calls are retrieving and appending movie info correctly, spend time making your page look nice.

## Submission

Homework is due tonight by **11pm**. Follow the [Homework Guide](https://git.generalassemb.ly/nyc-wdi-fisher/student-resources/blob/master/homework-guide.md) for instructions.

## Assignment

#### Features

* Max should be able to see a list of all the movies that are currently playing at Max Entertainment
* Max should be able to enter the name of a movie into an input field and click a "search" button (Use jQuery event handling and AJAX to send a request to OMDb API)
* Max should see the results of this OMDb API search displayed nicely on the page (Handle the "response" with Handlebars.js and jQuery)
* Max should be able to click a "save" button to add the movie to the list of movies currently playing (More Handlebars.js and jQuery)

#### Tips - Don't Get Ahead of Yourself!

![Popcorn Time](https://i.giphy.com/7b6qWQONCKRIQ.gif)

* Before you start coding, think about the assignment and what you'll need to accomplish
* Break the problem down into logical steps
* Read the OMDb API documentation to learn how to use the API
* For OMDb API you don't need to use the Poster API. You should be able to get movie posters out of the regular API data request.

## Bonus

What happens if you search for something and it doesn't return a legitimate movie? It will still append to the page, and mess up the styling of subsequent movies. Add a conditional so that only searches with good results will append movie information to the page. `HINT` - checkout the `error` method in the jQuery AJAX docs.
