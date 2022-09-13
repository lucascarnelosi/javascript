// callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')

    name()

    console.log('depois de executar a função callback')
}

sayMyName(
    () => {   //arrow function
        console.log('estou em uma callback')  
    }
)



// Function() constructor - * 'this' keyword(palavra-chave)


function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + " está andando"
    }
}

const lucas = new Person('Lucas')

console.log(lucas.walk())