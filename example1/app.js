let xhr;
let endPoint="http://worldtimeapi.org/api/timezone/Asia/Kathmandu";

function connect(){

    xhr=new XMLHttpRequest();
    xhr.onreadystatechange=processResponse;
    xhr.open('GET',endPoint,true);
    xhr.send(null);
}

function processResponse(){

    if(xhr.readyState===4 && xhr.status===200){

        let str=xhr.responseText;
       let obj=JSON.parse(str);
       let today=new Date(obj.datetime);
       let span=document.getElementById('currentdatetime');
       span.innerHTML=today.toDateString() +","+today.toLocaleTimeString();


    


    }

    else if(xhr.readyState===4 && xhr.status!==200){

        alert('Sorry ! the request cannot be fullfilled\n Reason:'+xhr.statusText);
    }
}

