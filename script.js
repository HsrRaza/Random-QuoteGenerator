const container = document.getElementById('fetch');
const btn = document.querySelector('button');
const p = document.createElement('p');

btn.addEventListener('click' ,function(){
     fetchingData()
})

async function fetchingData(){
    try {
        const apies = await fetch("https://api.quotable.io/random");
        if(!apies.ok) {
            throw new Error('Http server error')
        }

        const res = await apies.json();
        console.log(res);
        

        // p.innerText = response;
        // container.append(p); 
    } catch (error) {
        console.log(error);
        
    }
     

    
}

