let people = [

  {
    id: 1,
    name: "Lyubomir Stoyanov",
    job: "Web Developer",
    info: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error, cupiditate corporis! In vero fugit corrupti qui? Impedit temporibus sit ad tempore, expedita officiis? Autem officia voluptate doloremque id necessitatibus dolorum.",
    image: "https://lubodev.com/images/lyuboimage.jpg"

  },

  {
    id: 2,
    name: "Ivan Georgiev",
    job: "Marketing Expert",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, provident adipisci necessitatibus aperiam earum id, sed error ipsa eaque odit ducimus assumenda beatae fuga explicabo repellat quibusdam iure quis sapiente!.",
    image: "https://lubodev.com/images/ivanimage-removebg-preview.png"
  },

  {
    id: 3,
    name: "Bobby Yan",
    job: "Copywriting",
    info: "  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi cumque aliquam nobis numquam culpa modi beatae molestias maiores possimus odio. Officia consequuntur rem dolore? Corporis atque optio repellendus ea similique.",
    image: "https://lubodev.com/images/bobbyimage.jpg"
  }


]

// THIS IS THE DEFAUT PERSON WHEN THE BROWSER LAODS 



let reviewsBox = document.querySelector('.reviews');

let leftArrow = document.getElementById('leftArrow');
let rightArrow = document.getElementById('rightArrow');

let names = document.querySelector('.names');
let job = document.querySelector('.job');
let images = document.querySelector('.images');
let info = document.querySelector('.info');


let usersLenght = people.length;


let numb = 1;


//CHANGE RIGHT FUNCTION

function changeRight() {

  rightArrow.addEventListener('click', function () {

    numb += 1;

  if (numb > usersLenght) {

      numb = 1;

    }

    changePerson ();

  })



} changeRight();

// END OF CHANGE RIGTH FUNCTION


// CHANGE LEFT FUNCTION

function changeLeft() {

  leftArrow.addEventListener('click', function () {

    numb -= 1;

    if (numb < 1) {

      numb = 3;

    }


    changePerson();

  });

} changeLeft();

// END OF CHANGE LEFT FUNCTION


//CHANGE PERSON FUNCTION


function changePerson() {

  let selectedData = people.find(value => {

    return value.id === numb;

  });

  names.innerHTML = selectedData.name;
  job.innerHTML = selectedData.job;
  info.innerHTML = selectedData.info;
  images.setAttribute('src', selectedData.image);


}
