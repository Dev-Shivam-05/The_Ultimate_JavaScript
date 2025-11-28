let baseUrl = `https://api.openweathermap.org/data/2.5/weather?q=navsari&appid=f9903d64542d704faf3274a7548b8ed9`

let fetchApi = async () => {
    try{
        let data = await fetch(baseUrl)
        console.log(data);
    
    }

    catch(error){
        console.log(error);
        
    } 
}
fetchApi()