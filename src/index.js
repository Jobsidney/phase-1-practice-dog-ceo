console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'




document.addEventListener('DOMContentLoaded',function(){
    function animalImages(){
        return fetch(imgUrl)
        .then(response => response.json())
        .then(data => {
            const dogs=data.message;
            const div=document.querySelector('#dog-image-container')
    
            for (const dog of dogs) {
                const li=document.createElement(`li`)
                const img=document.createElement('img')
                const dogg=dog.toString()
                img.src=dogg
                div.appendChild(li)
                li.appendChild(img)
                console.log(dog);
                
            }
        }).catch(err => {console.log(`error: ${err}`);});
    }
    function animalBreed(){
        return fetch(breedUrl).then(respose=>respose.json().then(data=>{
            let array=[]
            breeds=data.message
            for(breed in breeds){
            if(breed.charAt(0)=='be'){
                array.push(breed.key())
            };}
            

        }))
    }
    animalBreed()
    animalImages()

})
