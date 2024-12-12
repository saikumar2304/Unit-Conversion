function updateFields() {
    const category = document.getElementById('category').value;
    const fieldGroups = document.querySelectorAll('.field-group');
    fieldGroups.forEach(group => {
        group.style.display = 'none';
    });
    document.getElementById(`${category}-fields`).style.display = 'block';
}

function convertTime() {
    const value = parseFloat(document.getElementById('time-value').value);
    const from = document.getElementById('time-from').value;
    const to = document.getElementById('time-to').value;

    let result;
    const timeUnits = {
        second: 1,
        minute: 60,
        hour: 3600,
        day: 86400
    };

    result = (value * timeUnits[from]) / timeUnits[to];

    document.getElementById('time-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

function convertTemperature() {
    const value = parseFloat(document.getElementById('temperature-value').value);
    const from = document.getElementById('temperature-from').value;
    const to = document.getElementById('temperature-to').value;

    let result;

    if (from === 'celsius') {
        if (to === 'fahrenheit') {
            result = (value * 9/5) + 32;
        } else if (to === 'kelvin') {
            result = value + 273.15;
        } else {
            result = value;
        }
    } else if (from === 'fahrenheit') {
        if (to === 'celsius') {
            result = (value - 32) * 5/9;
        } else if (to === 'kelvin') {
            result = (value - 32) * 5/9 + 273.15;
        } else {
            result = value;
        }
    } else if (from === 'kelvin') {
        if (to === 'celsius') {
            result = value - 273.15;
        } else if (to === 'fahrenheit') {
            result = (value - 273.15) * 9/5 + 32;
        } else {
            result = value;
        }
    }

    document.getElementById('temperature-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

function convertArea() {
    const value = parseFloat(document.getElementById('area-value').value);
    const from = document.getElementById('area-from').value;
    const to = document.getElementById('area-to').value;

    let result;
    const areaUnits = {
        'square meter': 1,
        'square kilometer': 1e6,
        'square mile': 2.59e6,
        'acre': 4046.86
    };

    result = (value * areaUnits[from]) / areaUnits[to];

    document.getElementById('area-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

function convertWeight() {
    const value = parseFloat(document.getElementById('weight-value').value);
    const from = document.getElementById('weight-from').value;
    const to = document.getElementById('weight-to').value;

    let result;
    const weightUnits = {
        gram: 1,
        kilogram: 1000,
        pound: 453.592,
        ounce: 28.3495
    };

    result = (value * weightUnits[from]) / weightUnits[to];

    document.getElementById('weight-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}

function convertLength() {
    const value = parseFloat(document.getElementById('length-value').value);
    const from = document.getElementById('length-from').value;
    const to = document.getElementById('length-to').value;

    let result;
    const lengthUnits = {
        meter: 1,
        kilometer: 1000,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254
    };

    result = (value * lengthUnits[from]) / lengthUnits[to];

    document.getElementById('length-result').innerText = `Result: ${result.toFixed(2)} ${to}`;
}
