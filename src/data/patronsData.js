const _apiUrl = "/api/patrons";

// async/await format
// export const getPatrons = async () => {
//     const res = await fetch(_apiUrl);
//     return res.json();
// }

//.then format
// get all patrons
export const getPatrons = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

// get data for individual patron
export const getPatron = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
};

export const editPatron = (id, updatedPatron) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedPatron)
    });
};

export const deactivatePatron = (id) => {
    return fetch(`${_apiUrl}/${id}`, {
        method: "DELETE"
    });
};