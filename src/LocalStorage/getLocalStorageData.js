
export default function getLocalStorageData(property){
    let data = localStorage.getItem(property)
    return JSON.parse(data)
}