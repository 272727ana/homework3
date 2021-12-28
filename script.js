let input;

function checkInputType(input){
    if(typeof (input) === "object"){
        return typeof (input)
    }
    else if (typeof(input) === "boolean"){
        return typeof (input)
    }
    else if (typeof (input) === "number"){
        return typeof (input)
    }
    else if (typeof(input) === "string"){
        return typeof(input)
    }
    else if (typeof(input) === "undefined"){
        return typeof(input)
    }
}

console.log(checkInputType(null))
console.log(checkInputType(isNaN))
console.log(checkInputType(NaN))
console.log(checkInputType(""))
console.log(checkInputType(undefined))