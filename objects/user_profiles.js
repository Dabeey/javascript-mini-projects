// Create users with constructor function
function User(name, email) {
    this.name = name;
    this.email = email;
    this.loginCount = 0;
    this.createdAt = new Date();
}

// Method to log in the user
User.prototype.login = function() {
    this.loginCount++;
    console.log(`${this.name} has logged in ${this.loginCount} times.`);
};

// Method to log out the user
User.prototype.logout = function() {
    console.log(`${this.name} has logged out.`);
};

// Method to display user info
User.prototype.displayInfo = function() {
    console.log(`Name: ${this.name}, Email: ${this.email}, Login Count: ${this.loginCount}, Created At: ${this.createdAt}`);
};

// Create a new user instance
const user1 = new User("John Doe", "john@example.com");
const user2 = new User("Jane Smith", "jane@example.com");
// Log in the users
user1.login();
user2.login();
user1.login();
user2.displayInfo();
user1.logout();