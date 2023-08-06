export const validateId = (id) => {
    if(id.length !== 8) {
        return false;
    }
    return true;
    
}

export const validatePw = (pw) => {
    if(pw.length > 20 || pw.length < 4) {
        return false;
    }
    if(pw.length < 20 || pw.length > 4) {
        return true;
    }
}
