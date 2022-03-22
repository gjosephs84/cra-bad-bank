const validate = (field, label, setStatus) => {
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;
    }
    return true;
}

export default validate;