import { Injectable } from "@angular/core";
import { Customer } from './customer.model';
import { Observable } from 'rxjs';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class CustomerRepository{

    private customers : Customer[] = [];

    constructor(private staticdatasource : StaticDataSource){ 
        staticdatasource.getCustomers().subscribe(data => {
            this.customers=data;
        });

    }

    /*getCustomers(){
        return this.customers;
    }*/

    saveCustomer(customer : Customer): Observable<Customer>{
        return this.staticdatasource.saveCustomer(customer);
    }

    getByCustomerUsername(username : String) : Customer{
        return this.customers.find(u=>u.username==username);
    }

   
}