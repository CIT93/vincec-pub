const saveLS = cfpData => {
    const serializedArr = JSON.stringify(cfpData);
    localStorage.setItem("cfpData", serializedArr)
};

const getLS = () => {
    const retrievedArr = localStorage.getItem("cfpData");
    if (retrievedArr !== null) {
        return JSON.parse(retrievedArr);
    } else {
        return [];
    }
};

const cfpData = getLS();

export {cfpData, saveLS, getLS};