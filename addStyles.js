const bodyClass = "bg-purple-800 bg-gradient-to-br from-green-300 bg-opacity-25";
const bdy = document.querySelector('body')
bodyClass.split(" ").forEach(cls => bdy.classList.add(cls));

const calcBodyClass = "max-w-lg rounded overflow-hidden shadow-2xl bg-blue-500 bg-op-74 bg-gradient-to-tr from-purple-800 flex"
const calcBody = document.querySelector(".calcBody");
calcBodyClass.split(" ").forEach((cls) => calcBody.classList.add(cls));

const outputClass = "flex flex-col w-3/4 h-12 justify-center items-end m-1 bg-gray-300 text-gray-900 font-semibold px-2 border border-black hover:border-gray-500 rounded"
const outputBody = document.querySelector(".output");
outputClass.split(" ").forEach((cls) => outputBody.classList.add(cls));

const previousNumberClass = "flex max-w-lg h-1/3 pb-5 pt-1 text-gray-600 text-xs"
const previousNumber = document.querySelector(".previousNumber");
previousNumberClass.split(" ").forEach((cls) => previousNumber.classList.add(cls));

const currentNumberClass = "flex max-w-lg h-2/3 pb-2 text-xl"
const currentNumber= document.querySelector(".currentNumber");
currentNumberClass.split(" ").forEach((cls) => currentNumber.classList.add(cls));

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => {
    addClasses(btn)
})

function addClasses(button) {
    const btnNumberClass = "hover:bg-purple-500 border-purple-500";
    const btnClearClass = "hover:bg-white-500 border-white-500";
    const btnOpClass = "hover:bg-orange-500 border-orange-500";
    const btnEqClass = "hover:bg-green-500 border-green-500";
    const btnDecClass = "hover:bg-red-500 border-red-500";

    if(button.classList.value === "number"){
        btnNumberClass.split(" ").forEach(cls => button.classList.add(cls));
    } else if(button.classList.value === "operator"){
        btnOpClass.split(" ").forEach(cls => button.classList.add(cls));
    } else if(button.classList.value === "clear"){
        btnClearClass.split(" ").forEach(cls => button.classList.add(cls));
    } else if(button.classList.value === "equal"){
        btnEqClass.split(" ").forEach(cls => button.classList.add(cls));
    } else if(button.classList.value === "decimal"){
        btnDecClass.split(" ").forEach(cls => button.classList.add(cls));
    }

    const baseClass = "number flex w-12 h-12 justify-center items-center m-1 font-bold py-2 px-2 border hover:border-transparent rounded text-white border-2 text-2x1"
    baseClass.split(" ").forEach((cls) => button.classList.add(cls))
}