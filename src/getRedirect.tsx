import axios from 'axios'
const getRedirection = () => {
    const shortUrl: string = "http://localhost:4040/url/" + window.location.pathname.substring(1);
    axios.get(shortUrl, {withCredentials: true})
    .then(response => {
        console.log(response)
        if(response.data.substring(0, 5) === "http" || response.data.substring(0,5) === "https"){
            window.location.href = (response.data);
        }
        else{
            window.location.href = "//" + response.data;
        }
    })
    .catch(error => {
        console.log("Error in getting the redirect link.");
    });
}

export default getRedirection;