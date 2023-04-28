class MyError extends Error {
    constructor(args) {
        super(args)
        this.name = "my error"
    }
}

//const error_1 = new Error("yubidi")
//console.log(error_1)

/* const error_2 = new MyError("yubidi")
console.log(error_2) */

const object = {
    "name": "name"
}
console.log(object.name)