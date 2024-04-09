This is a basic reviews switcher creater with HTML, CSS and Vanilla JavaScript.

How it works:

We create an object for each person with the categories: id (for the unique identifier), image, name, job and info description. 

These objects are put inside an array. 

We create a variable by the name "numb" that:
increments when clicking right arrow  => 
decrements when clicking left arrow  <=

 let selectedData = people.find(value => {

    return value.id === numb;

  });

We use find() method where we search for the id that is equal to the dynamically generated "numb" variable.

Find returns an object with all the values inside. 

We take the values from our HTML and store them in variables like this:

let names = document.querySelector('.names');
let job = document.querySelector('.job');
let images = document.querySelector('.images');
let info = document.querySelector('.info');

  Lastly we change the values based on the new dynamically changed number (variable "numb").

  names.innerHTML = selectedData.name;
  job.innerHTML = selectedData.job;
  info.innerHTML = selectedData.info;
  images.setAttribute('src', selectedData.image);

  



