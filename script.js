const btn = document.getElementById('button')
const cardblock = document.getElementById('cardblock')
const flipFrontImg = document.querySelectorAll(".flip-card-front img");
const flipCardsBack = document.querySelectorAll(".flip-card-back");
let dummy = [];
let checkimage = [];
let clickimage = 0;


btn.addEventListener("click", ()=>{
    cardblock.style = "display:block";
    btn.style = "display:none";
    newfunction()
})
const images = [" ./imageOne.jpg","./imageTwo.jpg","./imageThree.jpg","./imageFour.jpg","./imageFive.jpg","./imageSix.jpg"]

let new_arr = [...images,...images];
console.log(new_arr)

// function selectImage(){
    //     for(let i=0; i<new_arr.length; i++){
        //         const image = document.createElement('img')
        //         image.src = new_arr;        
        //     }
        // }
        function selectimage() {
            let check = Math.floor(Math.random() * new_arr.length);
            if (dummy.includes(check)) {
                return selectimage()
            }
            else {
                dummy.push(check)
                return check
            }
        }
    
        function newfunction() {
    for (let i = 0; i < new_arr.length; i++) {
        let image = document.createElement("img")
        image.src = new_arr[selectimage()]
        flipCardsBack[i].append(image)
    }
}
flipFrontImg.forEach((value) => {
    value.addEventListener("click", () => {
    clickimage++
        value.parentElement.parentElement.classList.add("backside");
        checkimage.push(value.parentElement.nextElementSibling.children[0]);
// console.log();
        if (clickimage === 2) {
            if (checkimage[0].src === checkimage[1].src) {
                checkimage.length = 0;
                clickimage = 0;

            }
            else {

                setTimeout(() => {
                    checkimage.forEach((selectedImage) => {
                        selectedImage.parentElement.parentElement.classList.remove("backside")
                    });
                    checkimage.length = 0;
                    clickimage = 0;
                }, 1000)
                
            }
        }

    })
})