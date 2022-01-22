
function locaDatalUP (key , data){
    let localData = JSON.stringify(data);
    localStorage.setItem(key , localData);
}

function localDataDown (key){
    let localDataGet = localStorage.getItem(key)
    return JSON.parse(localDataGet)
}

locaDatalUP("studentDATA",studentData)

 
let ldata = localDataDown('studentDATA')

ldata.map((data) => {
    document.querySelector('#output').innerHTML += `
    
        <div class="col-lg-3 mt-4">
            <div class="card shadow-lg">
                <div class="card-body">
                    <img class="card-img" src="${data.image}" alt="">
                    <span class="mt-2">ID : ${data.id}</span>
                    <h4 class="mt-2">Name : ${data.name}</h4>
                    <span class="mt-1">Rool : ${data.rool}</span>
                    <span class="mt1">Reg : ${data.reg}</span>
                    <strong class="mt-1">Class : ${data.class}</strong>
                    <strong class="mt-1">Loocation : ${data.loocation}</strong>
                </div>
            </div>
        </div>
        
    `
})