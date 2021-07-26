


export const staticUsers = [
    { email: 'admin@udayy.com', password: 'admin@123', id: 'user_id01', name: 'Admin' },
    { email: 's.k@udayy.com', password: 'sk@123', id: 'user_id01', name: 'User 2' },

]



export const getFromSession = (key) => {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
};


export const saveInSession = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const removeFromSession = (key) => {
    localStorage.removeItem(key);
};



export const validURL = (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}