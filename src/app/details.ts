export class Details {
    public Firstname!: string;
    public Lastname!: string;
    public Middlename!: string;

    public Addr: Address[] = [];
}

export class Address {
    public City!: string;
    public State!: string;
    public Country!: string;
    public Street!: string;
    public DateOfBirth!: any;
    public Zipcode!: any;
}



