// console.log("working")

// const myFunction = () => {
//     console.log('first')
//     axios.get('https://dog.ceo/api/breeds/list/all').then(function () {
//       console.log('second')
//     })
//   }

  const button = document.querySelector("#btn")
  const breedInput = document.querySelector("#searchbar")
  const imageContainer = document.querySelector("#imgContainer")

  const getBreeds = async () => {
    const dogBreeds  = await axios.get('https://dog.ceo/api/breeds/list/all')
    console.log(dogBreeds.data.message)
    }
  

  getBreeds()


  button.addEventListener('click', async () => {
    let breed = breedInput.value
    console.log(breed)
    let response = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
    console.log(response.data.message)
    let dogPic = response.data.message
    imageContainer.setAttribute('src', dogPic)
  })