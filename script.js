function convertToCelsius() {
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusResult = document.getElementById("result-celsius");

    const fahrenheit = parseFloat(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * (5 / 9);
        celsiusResult.textContent = `Temperature in Celsius: ${celsius.toFixed(2)} °C`;
    } else {
        celsiusResult.textContent = "Please enter a valid Fahrenheit temperature.";
    }
}

function convertToFahrenheit() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitResult = document.getElementById("result-fahrenheit");

    const celsius = parseFloat(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        fahrenheitResult.textContent = `Temperature in Fahrenheit: ${fahrenheit.toFixed(2)} °F`;
    } else {
        fahrenheitResult.textContent = "Please enter a valid Celsius temperature.";
    }
}

function resetConversion() {
    const celsiusInput = document.getElementById("celsius");
    const fahrenheitInput = document.getElementById("fahrenheit");
    const celsiusResult = document.getElementById("result-celsius");
    const fahrenheitResult = document.getElementById("result-fahrenheit");

    // Clear input fields
    celsiusInput.value = '';
    fahrenheitInput.value = '';

    // Clear result messages
    celsiusResult.textContent = '';
    fahrenheitResult.textContent = '';
}
