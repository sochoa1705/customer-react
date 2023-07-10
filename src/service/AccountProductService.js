export const AccountProductService = {
    // Reemplazar por API
    getAccountProducts() {
        return fetch('https://api.npoint.io/80a411e61e754db5969e').then(res => res.json()).then(data => data.data);
    },
}