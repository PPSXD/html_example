const clearBtn = document.querySelector("#clear");
clearBtn.onclick = () =>{
    alert("clear all");
};

clearBtn.onclick = () => {
    console.log("clear all");
};

// case 2 : add event listener to a button
// clearBtn.addEventListener("click", () => {
//     alert("clear all")
// });

// clearBtn.addEventListener("click", () => {
//     console("clear all")
// });

// case 3 : use callback function name
// function onClear(){
//     const itemList = document.querySelector("ul");
//     // const items = document.querySelectorAll("li");
//     while(itemList.firstChild){
//         itemList.removeChild(itemList.firstChild);
//     }
// }
// clearBtn.addEventListener("click", onClear);

// case 4: event listener with web API
function onClear(){
    const itemList = document.querySelector("ul");
    while(itemList.firstChild){
        itemList.removeChild(itemList.firstChild);
    }
}
clearBtn.addEventListener("click", onClear);
// setTimeout(() => clearBtn.addEventListener("click", onClear),5000);
setTimeout(() => clearBtn.removeEventListener("click", onClear),5000);