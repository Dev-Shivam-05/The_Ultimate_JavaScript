const breedListURL =  "https://dog.ceo/api/breeds/list/all";
const selectBreed = document.getElementById('breedSelect');
let breedList =  [];
const getImage = document.getElementById('getImage');
const noImage = document.querySelector('#imageContainer .no-image');

const fetchBreeds = async () => {
    let response = await fetch(breedListURL,()=>{
        method:"GET"
    });
    let key = await response.json();
    breedList = Object.keys(key.message);
    handleBreeds();
}

const handleBreeds = async () => {
    console.log(breedList);
        
    breedList.forEach((breed)=>{
        let option = document.createElement('option');        
        option.value = breed.toLowerCase();
        option.innerText = breed;
        selectBreed.appendChild(option);
    });
};

const randomFetch = async () => {
    let randomIndex = Math.floor(Math.random() * (breedList.length - 0 + 1)) + 0;
    
    let response = await fetch(`https://dog.ceo/api/breed/${breedList[randomIndex]}/images/random`);
    let data = await response.json();
    noImage.classList.add('d-none');
    getImage.classList.remove('d-none');
    getImage.src = data.message;
    getImage.alt = breed;
};
fetchBreeds();

selectBreed.addEventListener('change', async (e) => {
    let breed = e.target.value;

    let response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
    let data = await response.json();
    noImage.classList.add('d-none');
    getImage.classList.remove('d-none');
    getImage.src = data.message;
    getImage.alt = breed;
})
/* 
const handelApi = () => {
    breedList.forEach((breed) => {
        let option = document.createElement('option')
        option.value = breed.toLowerCase()
        option.innerText = breed
        viewbreed.appendChild(option)
    })
}

viewbreed.addEventListener('change', async (e) => {
    let breed = e.target.value
    if (!breed) return;

    try {
        // Hide image & show loader
        dogImg.style.display = "none"
        loader.style.display = "block"

        let res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        let data = await res.json()

        // Set image
        dogImg.src = data.message

        // Wait for image to load fully
        dogImg.onload = () => {
            loader.style.display = "none"
            dogImg.style.display = "block"
            dogImg.style.opacity = "1"
        }

    }
    catch (error) {
        console.log(error.message);
    }
})

fetchBreed()
*/