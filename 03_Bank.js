class Bank {
    #bank;

    constructor(bankName) {
        this.#bank=bankName;
        this.allCustomers=[];
    }

    newCustomer (customer){
        if (this.allCustomers.indexOf(customer) != -1) {
            throw new Error (`${customer.firstName} ${customer.lastName} is already our customer!`);
        }; 
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney (personalId, amount){
        
        if (!this.allCustomers.find(c=>c.personalId===personalId)) {
            throw new Error ("We have no customer with this ID!");
        }; 
        
        let searchedCustomer=this.allCustomers.find(c=>c.personalId===personalId);
        let searchedIndex=this.allCustomers.findIndex(c=>c.personalId===personalId);                     
        let currentCustomer={
            firstName:searchedCustomer.firstName,
            lastName:searchedCustomer.lastName,
            personalId:searchedCustomer.personalId,
            totalMoney:amount
        };        
        this.allCustomers.splice(searchedIndex,1,currentCustomer);
        return `${searchedCustomer.totalMoney}$`;
    }
    withdrawMoney (personalId, amount){
        if (!this.allCustomers.find(c=>c.personalId===personalId)) {
            throw new Error ("We have no customer with this ID!");
        };
        let searchedCustomer=this.allCustomers.find(c=>c.personalId===personalId);
        let searchedIndex=this.allCustomers.findIndex(c=>c.personalId===personalId);
        if(Number(searchedCustomer.totalMoney)<amount){
            throw new Error (`${searchedCustomer.firstName} ${searchedCustomer.lastName} does not have enough money to withdraw that amount!`);
        }
        searchedCustomer.totalMoney-=amount;
        this.allCustomers.splice(searchedIndex,1,searchedCustomer);
        return `${searchedCustomer.totalMoney}$`;
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
console.log(bank.withdrawMoney(6233267, 125));


