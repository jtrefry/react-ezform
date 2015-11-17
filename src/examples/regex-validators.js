const regexValidators = {
    //see: http://www.regular-expressions.info/email.html
    email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    phone: /\d{3}-\d{3}-\d{4}/
};

export default regexValidators;