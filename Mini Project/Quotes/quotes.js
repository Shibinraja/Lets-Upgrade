
let submit = async ()=>{
    
    let url = "https://quotes.rest/qod?language=en"
    let response = await fetch(url);
    
    if(response.ok){
        
        let commits = await response.json();
        
        let message = commits.contents.quotes

        let quote = message.forEach((name)=>{
            let h3 = document.getElementById("quotes")
            h3.textContent = name.quote

            let author = document.getElementById("author")
            author.textContent = name.author
        })

        
    }

}

