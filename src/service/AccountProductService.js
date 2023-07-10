export const AccountProductService = {
    // Reemplazar por API
    getAccountProducts() {
        return fetch('https://api.npoint.io/80a411e61e754db5969e').then(res => res.json()).then(data => data.data);
    },

    getAccountSaving() {
        return [
            {
                id: 'AHO1000',
                code: '123456789',
                availableBalance: 1000,
                totalBalance: 1000,
            }
        ];

    },

    getProductSaving() {
        return Promise.resolve(this.getAccountSaving());
    },
    getAccountProductChecking() {
        return Promise.resolve(this.getAccountProducts()[1]);
    },
    getProducts(){
        return Promise.resolve(this.getAccountProducts());
    },
    getTransactions(){
        return Promise.resolve(this.getAccountProducts()[0].accountTransactions);
    }
}
