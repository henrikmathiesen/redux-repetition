const validate = (objectToValidate, objectWithRequiredRules) => { 
    let isValid = true;
    
    Object.keys(objectToValidate).forEach((property) => { 
        if(objectWithRequiredRules[property] && !objectToValidate[property]) {
            isValid = false;
        }
    });

    return isValid;
};

export default validate;
