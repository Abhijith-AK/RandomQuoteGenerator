const api = new XMLHttpRequest();
function getApi() {
    const random = Math.floor(Math.random() * 1400) + 1;
    api.open("GET", `https://dummyjson.com/quotes/${random}`)
    api.send()
    api.onreadystatechange = () => {
        if(api.readyState == 4){
            if(api.status >= 200 && api.status < 300) {
                const response = JSON.parse(api.responseText);
                quote.innerHTML = `'${response.quote}' <br>
                    - <i style="text-align: right;"> ${response.author} </i>`
            }else{
                console.log("Page status error- status:",api.status)
            }
        }else{
            console.log("Waiting for response...")
        }
    }
}
    
getApi()