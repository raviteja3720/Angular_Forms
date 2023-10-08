import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    personDetailsObj = new PersonalDetails();
    addressObj = new Address();

    multiplePersons: PersonalDetails[] = [];

    multipleAddress: Address[] = [];

    personalDetailsDisplay: boolean = true;

    showAllDetails: boolean = false;

    addressDisplay: boolean = false;

    submitHide: boolean = true;

    isUpdate: boolean = false;

    back:boolean=false;

    addAddress() {
        this.addressDisplay = true;
        this.personalDetailsDisplay = false;
    }

    additionalAddress() {
        // console.log(this.addObj);
        this.personDetailsObj.Addr.push(this.addressObj);
        this.addressObj = new Address();
        // console.log(this.arrayAddress.length);

    }

    addPersonalDetails() {
        this.multiplePersons.push(this.personDetailsObj);
        this.personalDetailsDisplay = true;
        this.addressDisplay = false;
        this.personDetailsObj = new PersonalDetails();
        // console.log(this.multiplePersons.length);
    }

    deletePersonDetails(i: number) {
        this.multiplePersons.splice(i, 1);
    }

    updatePerson(s: any) {
        this.personDetailsObj = s;
        this.isUpdate=true;
        this.showAllDetails = false;
        this.personalDetailsDisplay = true;
    }

    deleteAddress(a: any, pId: any, aId: any) {
        this.multiplePersons[pId].Addr.splice(aId, 1);
    }

    updateAddress(a: any, pId: any, aId: any) {
        this.isUpdate=true;
        this.addressDisplay = true;
        this.showAllDetails = false;
        this.addressObj = a;
        this.isUpdate = true;
    }
    show() {
        this.addressDisplay = false;
        this.showAllDetails=true;
        this.personalDetailsDisplay=false;
        this.back=true;
    }
    onSub() {
        this.showAllDetails = true;
        this.addressDisplay = false;
        this.submitHide = false;
        this.personalDetailsDisplay = false;
    }
}




export class PersonalDetails {
    public Firstname!: string;
    public Lastname!: string;
    // public Mobile!: number;
    public Email!: string;
    public DateOfBirth!: any;
    public Addr: Address[] = [];
}

export class Address {
    public Addre!: string;
    public City!: string;
    public State!: string;
    // public Street!: string;
    // public Country!: string;
    public Zipcode!: any;
    public Mobile!: number;
    public LevelAccess!: any;
    public isActive!: boolean;
}



