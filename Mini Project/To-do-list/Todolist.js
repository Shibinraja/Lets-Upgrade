let create = document.getElementById("btn-create");
let deleted = document.getElementById("btn-delete");
let read = document.getElementById("btn-read");
let update = document.getElementById("btn-update");


function list(make, read, updating, trash){

    
    make.addEventListener("click", function(){
        let id = document.getElementById("user").value
        let ListName = document.getElementById("List").value    
        let user = document.getElementById("UserName").value
        let Date = document.getElementById("date").value
        var json = {id, ListName, user , Date};
        console.log(json);

        let add = localStorage.setItem('List', JSON.stringify(json));
})

    read.addEventListener("click", function(){

        let gasper = localStorage.getItem('List')
        let detailsparsed = (JSON.parse(gasper));
        let details = ([detailsparsed])
            Table = document.getElementById("tb");
            
            details.map((ele , i)=>{
                console.log(ele)
                Trow = document.createElement("tr")
                ID = document.createElement("td");
                ListName = document.createElement("td");
                user = document.createElement("td");
                Dates = document.createElement("td");
                Edit = document.createElement("td");
                Delete = document.createElement("td");
                ID.innerText = ele.id;
                ListName.innerText = ele.ListName;
                user.innerText = ele.user;
                Dates.innerText = ele.Date;
                Trow.appendChild(ID);
                Trow.appendChild(ListName);
                Trow.appendChild(user);
                Trow.appendChild(Dates);
                Trow.appendChild(Edit);
                Trow.appendChild(Delete);

                Table.appendChild(Trow);

                Edit.onclick= function(){
                    document.getElementById("user").value = ele.id;
                    document.getElementById("List").value = ele.ListName;
                    document.getElementById("UserName").value = ele.user;
                    document.getElementById("date").value = ele.Date;
                }


            })
        
        



    });

    trash.addEventListener("click", function(){
        
        localStorage.removeItem("List")
                    

    });
}

list(create ,read, update ,deleted)