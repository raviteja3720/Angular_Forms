import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    personDetailsObj = new PersonalDetails();
    addressObj = new Address();

    searchValue: any = '';

    searchInputField: any = false;

    searchPersonArray: any = [];

    DisplaysearchPersonArray=false;

    multiplePersons: PersonalDetails[] = [];

    multipleAddress: Address[] = [];

    SaveAddressBtn = true;

    addAddressButton = true;

    submitHide = true;

    personalDetailsForm = false;

    TablePersonalDetailsDisplay = false;

    addressDisplayForm = false;

    AddressDetailsDisplay = false;

    TabledisplayAllAddress = false;

    updatePersonbtn = false;

    updateAddressbtn = false;

    isUpdate = false;

    saveBtn = false;

    back = false;

    home() {
        this.personDetailsObj = new PersonalDetails();
        this.personalDetailsForm = false;
        this.TablePersonalDetailsDisplay = false;
        this.personalDetailsForm = false;
        this.addressDisplayForm = false;
        this.AddressDetailsDisplay = false;
        this.TabledisplayAllAddress = false;
        this.updatePersonbtn = false;
        this.updateAddressbtn = false;
        this.isUpdate = false;
        this.saveBtn = false;
        this.back = false;
        this.DisplaysearchPersonArray=false;
        this.searchInputField=false;
    }

    DisplayAllUsers() {
        this.TablePersonalDetailsDisplay = true;
        this.personalDetailsForm = false;
        this.addressDisplayForm = false;
        this.AddressDetailsDisplay = false;
        this.TabledisplayAllAddress = false;
        this.updatePersonbtn = false;
        this.updateAddressbtn = false;
        this.isUpdate = false;
        this.saveBtn = false;
        this.back = false;
        this.searchInputField = true;
        this.DisplaysearchPersonArray=false;
    }

    AddPerson() {
        this.personDetailsObj = new PersonalDetails();
        this.personalDetailsForm = true;
        this.addAddressButton = true;
        this.saveBtn = true;
        this.updatePersonbtn = false;
        this.TablePersonalDetailsDisplay = false;
        this.TablePersonalDetailsDisplay = false;
        this.TablePersonalDetailsDisplay = false;
        // this.addressDisplayForm = false;
        this.AddressDetailsDisplay = false;
        this.TabledisplayAllAddress = false;
        this.updateAddressbtn = false;
        this.isUpdate = false;
        this.back = false;
        this.DisplaysearchPersonArray=false;
        this.searchInputField=false;
        this.back=true;
    }

    addAddress() {
        this.addressDisplayForm = true;
        this.personalDetailsForm = true;
        this.addAddressButton = false;
        this.TablePersonalDetailsDisplay = false;
        this.AddressDetailsDisplay = false;
        this.TabledisplayAllAddress = false;
        this.addressObj = new Address();
        this.updateAddressbtn = false;
        this.SaveAddressBtn = true;
        this.updatePersonbtn=false;
        this.searchInputField=false;
    }

    additionalAddress() {
        // console.log(this.addObj);
        this.personDetailsObj.Addr.push(this.addressObj);
        this.addressObj = new Address();
        // console.log(this.arrayAddress.length);
        this.TabledisplayAllAddress = true;
        this.addressDisplayForm = false;
        this.addAddressButton = true;
        this.searchInputField=false;

    }

    // addPersonalDetails() {
    //     this.multiplePersons.push(this.personDetailsObj);
    //     this.personDetailsObj.Addr.push(this.addressObj);//added
    //     this.personalDetailsForm = false;
    //     this.addressDisplayForm = false;
    //     this.personDetailsObj = new PersonalDetails();
    //     // console.log(this.multiplePersons.length);
    //     this.TablePersonalDetailsDisplay = true;
    //     this.AddressDetailsDisplay = true;
    //     this.submitHide = false;
    //     this.saveBtn=false
    //     this.back=true;
    // }

    addPersonalDetails1() {
        this.multiplePersons.push(this.personDetailsObj);
        console.log(this.multiplePersons.length);
        // this.personDetailsObj.Addr.push(this.addressObj);
        this.personDetailsObj = new PersonalDetails();
        this.TabledisplayAllAddress = false;
        this.TablePersonalDetailsDisplay = false;
        this.personalDetailsForm = false;
        this.addressDisplayForm = false;
        this.saveBtn = false;
        this.back = false;
        this.TablePersonalDetailsDisplay=true;
        this.searchInputField=true;

    }

    cancelAddress() {
        this.addressDisplayForm = false;
        this.personalDetailsForm = true;
        this.addAddressButton = true;
        this.TabledisplayAllAddress = true;
        this.searchInputField=false;
    }

    deletePersonDetails(i: number) {
        this.multiplePersons.splice(i, 1);
    }

    updatePerson(s: any) {
        this.personDetailsObj = s;
        this.isUpdate = true;
        this.TablePersonalDetailsDisplay = false;
        this.personalDetailsForm = true;
        this.AddressDetailsDisplay = false;
        
    }

    deleteAddress(a: any, pId: any, aId: any) {
        this.multiplePersons[pId].Addr.splice(aId, 1);
    }
    deleteAddress1(id: any) {
        this.personDetailsObj.Addr.splice(id, 1);
    }

    // updateAddress(a: any, pId: any, aId: any) {
    //     this.isUpdate = true;
    //     this.personalDetailsForm = false;
    //     this.addressDisplayForm = true;
    //     this.TablePersonalDetailsDisplay = false;
    //     this.addressObj = a;
    //     this.isUpdate = true;
    // }

    editAddress(addobj: any, Id: any) {
        console.log(addobj + "----------" + Id);
        this.addressDisplayForm = true;
        this.TabledisplayAllAddress = false;
        this.addressObj = addobj;
        this.isUpdate = true;
        this.SaveAddressBtn = false;
        this.updateAddressbtn = true
        // this.personDetailsObj.Addr[Id]=addobj;
        this.searchInputField=false;
    }

    updateAddress1() {
        this.personalDetailsForm = true;
        this.TabledisplayAllAddress = true;
        this.addressDisplayForm = false;
    }

    editPerson(perObj: any, Id: any) {
        this.personalDetailsForm = true;
        this.personDetailsObj = perObj;
        // this.AddressDetailsDisplay=true;
        this.TabledisplayAllAddress = true;
        this.updatePersonbtn = true;
        this.TablePersonalDetailsDisplay = false;
        this.back = true;
        this.searchInputField=false;

    }

    updatePerson1() {
        // this.personDetailsObj = s;
        this.TabledisplayAllAddress = false;
        this.TablePersonalDetailsDisplay = true;
        this.updatePersonbtn = false;
        this.personalDetailsForm = false;
        // this.addressDisplayForm = false;
        this.AddressDetailsDisplay = false;
        this.TabledisplayAllAddress = false;
        // this.updatePersonbtn = false;
        this.updateAddressbtn = false;
        this.isUpdate = false;
        // this.saveBtn = false;
        this.back = false;
    }
    show() {
        this.addressDisplayForm = false;
        this.TablePersonalDetailsDisplay = true;
        this.AddressDetailsDisplay = true;
        this.personalDetailsForm = false;
        this.back = true;
    }

    back1() {
        this.TablePersonalDetailsDisplay = true;
        this.personalDetailsForm = false;
        this.back = false;
        this.isUpdate = false;
        this.addAddressButton = false;
        this.TabledisplayAllAddress = false;
        this.AddressDetailsDisplay = false;
        this.saveBtn = false;
        this.updatePersonbtn=false;
        this.searchInputField=true;;
        this.addressDisplayForm=false;
    }
    onSub() {
        this.TablePersonalDetailsDisplay = true;
        this.addressDisplayForm = false;
        this.submitHide = false;
        this.personalDetailsForm = false;
    }

    searchFunction(sValue: any) {
        this.DisplaysearchPersonArray=true;
        this.TablePersonalDetailsDisplay=false;
        this.searchPersonArray = this.multiplePersons.filter((searchValue) => {
            if (sValue == searchValue.Firstname)
                return this.searchPersonArray;
            console.log(this.searchPersonArray);
        }
        )
    }
}




export class PersonalDetails {
    public Firstname!: string;
    public Middlename!: string;
    public Lastname!: string;
    // public Mobile!: number;
    public Gender!:any;
    public Email!: string;
    public DateOfBirth!: any;
    public Addr: Address[] = [];
}

export class Address {
    public AddressType!: string;
    public Addre!: string;
    public City!: string;
    public State!: string;
    // public Street!: string;
    // public Country!: string;
    public Zipcode!: any;
    public Mobile!: number;
    // public LevelAccess!: any;
    public isActive!: boolean;
}



