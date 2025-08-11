import { UserBuilder } from "./implementation";

try {
  const user = new UserBuilder()
    .setName("Ujjwal")
    .setEmail("ujjwal@example.com")
    .setAge(25)
    .setAddress("Kathmandu")
    .build();

  user.display();

  // Example with only required fields
  const user2 = new UserBuilder()
    .setName("Alice")
    .setEmail("alice@example.com")
    .build();

  user2.display();
} catch (error) {
  console.error("Error creating user:", error);
}
