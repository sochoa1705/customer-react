export const AccountProductService = {
    getAccountProducts() {
        {/*reemplazar por API REST que devuelva los productos de una cuenta del cliente*/}
        return [
            {
                id: 'AHO1000',
                code: '123456789',
                availableBalance: 1000,
                totalBalance: 1000,
                accountTransactions: [
                    {
                        id: 'TRN1000',
                        date: '2021-01-01',
                        amount: 10,
                        reference: 'Pago de servicios',
                        type: 'DÉBITO',
                        debtor: 'Empresa de servicios',
                        balance: 1000 - 10,
                    },
                    {
                        id: 'TRN1001',
                        date: '2021-01-02',
                        amount: 35,
                        reference: 'Pago',
                        type: 'Transferencia',
                        debtor: 'Juan Perez',
                        balance: 1000 - 45,
                    }
                ]
            },
            {
                id: 'COR1001',
                code: '234567890',
                availableBalance: 2000,
                totalBalance: 5000,
            }
        ];
    },

    getProductSaving() {
        return Promise.resolve(this.getAccountProducts()[0]);
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