
export default function setLocalStorageData(id,data){
    const jsonData = JSON.stringify(data)
    localStorage.setItem(id,jsonData)
}

