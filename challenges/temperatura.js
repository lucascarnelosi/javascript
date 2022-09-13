function transformTemp(temperature) {
    const celsiusExists = temperature.toUpperCase().includes('C')
    const fahrenheitExists = temperature.toUpperCase().includes('F')

    
    // fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Grau não identificado')
    }


    // fluxo ideal F -> C
    let updatedTemp = Number(temperature.toUpperCase().replace('F', ''));
    let formula = fahrenheit => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'


    // fluxo alternativo C -> F
    if(celsiusExists) {
        updatedTemp = Number(temperature.toUpperCase().replace('C', ''));
        formula = celsius => celsius * 9/5 + 32
        degreeSign = 'F'
    }


    return formula(updatedTemp) + degreeSign
}

try {
    console.log(transformTemp('10C'))
    console.log(transformTemp('50F'))
    transformTemp('50Z')
} catch (error) {
    console.log(error.message)
}