console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'

  function renderImages(){
    fetch(imgUrl)
    .then(response => response.json())
    .then(function(json){
      let messages = json['message']
      for (dog in messages) {
        let dogContainer = document.getElementById('dog-image-container')
        const dogImg = document.createElement('IMG')
        dogImg.src = json['message'][dog]
        dogContainer.append(dogImg)
      }
    })
  }

  function listBreeds(){
    fetch(breedUrl)
    .then(response => response.json())
    .then(function(json){
      const dropdown = document.getElementById('breed-dropdown')
      dropdown.addEventListener('change', function(e){
        if (e.target.value = 'a'){
          breeds = json['message']
          for (breed in breeds){
            let breedsUL = document.getElementById('dog-breeds')
            let breedName = document.createElement('li')
            breedName.classList.add('breed')
            breedName.textContent = breed
            breedsUL.append(breedName)
          }
        }
        else
        breeds = json['message']
        for (breed in breeds){
          let breedsUL = document.getElementById('dog-breeds')
          let breedName = document.createElement('li')
          breedName.classList.add('breed')
          breedName.textContent = breed
          breedsUL.append(breedName)
        }
      })
    })
  }

  document.addEventListener('click', function(e){
    if (e.target.className === 'breed') {
      e.target.style.color = "blue"
    }
  })


  renderImages()
  listBreeds()
})
