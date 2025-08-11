export class User {
  public name: string;
  public email: string;
  public age?: number;
  public address?: string;

  constructor(builder: UserBuilder) {
    this.name = builder.getName();
    this.email = builder.getEmail();
    this.age = builder.getAge();
    this.address = builder.getAddress();
  }

  public display(): void {
    console.log(
      `User Info: ${this.name}, ${this.email}, Age: ${
        this.age ?? "N/A"
      }, Address: ${this.address ?? "N/A"}`
    );
  }
}

export class UserBuilder {
  private name!: string; //required
  private email!: string; //required
  private age?: number;
  private address?: string;

  // setters for requiired fields
  public setName(name: string): UserBuilder {
    this.name = name;
    return this;
  }

  public setEmail(email: string): UserBuilder {
    this.email = email;
    return this;
  }

  // setters for optional fields
  public setAge(age: number): UserBuilder {
    this.age = age;
    return this;
  }

  public setAddress(address: string): UserBuilder {
    this.address = address;
    return this;
  }

  // Getters (used by User constructor)
  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public getAge(): number | undefined {
    return this.age;
  }

  public getAddress(): string | undefined {
    return this.address;
  }


  // Build method validates required fields and returns User
  public build(): User {
    if (!this.name || !this.email) {
        throw new Error("Name and Email are required fields.");
    }
    return new User(this);
  }
}
