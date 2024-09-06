export const peticionFetch = (url) => {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(data => data.json())
            .then(async response => {
                resolve(response)
            }).catch(error => {
                reject(`Error: ${error}`)
            })
    })
}