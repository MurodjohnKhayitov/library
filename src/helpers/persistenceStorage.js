export const setItemKey = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log("Something wrong");
    }
}
export const setItemSign = (key, data) => {
    try {
        localStorage.setItem(key, data)
    } catch (error) {
        console.log("Something wrong");
    }
}
export const getItemKey = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log("Something wrong");
    }
}
export const getItemSign = (key) => {
    try {
        return localStorage.getItem(key)
    } catch (error) {
        console.log("Something wrong");
    }
}
export const removeItem = (key) => {
    try {
        return localStorage.removeItem(key)
    } catch (error) {
        console.log("Something wrong");
    }
}