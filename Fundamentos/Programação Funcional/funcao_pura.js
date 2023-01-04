const calculateCircumference = function (pi, radius) {
    return pi * (radius + radius);
}

const calculateCircumferenceArrowFunction = (pi, radius) => {
    pi * (radius + radius);
} 

const changePersonName = (person, name) => ({...person, name});