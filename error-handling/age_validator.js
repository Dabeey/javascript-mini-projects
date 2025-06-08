function registerUser(name, age ) {
    try {
        if (!name) throw new Error('Name is required!');
        if (age < 18) throw new Error('Must be 18+ to register');

        console.log(`User Registered: ${ name, age }`);    
    } catch (err) {
        console.error(`Registration failed: ${err.message}`);
    } finally {
        console.log('Registration attempt complete');
    }
}

registerUser("", 20); // Fails (name)
registerUser("Bob", 17); // Fails (age)
registerUser("Alice", 25); // Succeeds
