const _apiUrl = "/api/checkouts";

export const getCheckouts = () => {
    return fetch(_apiUrl).then((res) => res.json());
};

export const getOverdueCheckouts = () => {
    return fetch(`${_apiUrl}/overdue`).then((res) => res.json());
}

export const returnCheckout = (checkoutId) => {
    return fetch(`${_apiUrl}/${checkoutId}`, {
        method: "DELETE"
    });
};

export const postCheckout = (checkoutObject) => {
    return fetch(_apiUrl, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(checkoutObject)
    }).then((res) => res.json());
};