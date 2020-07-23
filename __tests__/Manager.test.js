const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Mr. Manager');
    expect(manager.name).toBe('Mr. Manager');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.role).toBe('Manager');
    expect(manager.officeNumber).toEqual(expect.any(Number));

    //console.log(manager);
});

test('gets manager name', () => {
    const manager = new Manager('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Manager', 1);
    expect(manager.getName()).toBe('Mr. Manager');
    //console.log(manager.getName());
});

test('gets manager id', () => {
    const manager = new Manager('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Manager', 1);
    expect(manager.getId()).toBe(1);
    //console.log(manager.getId());
});

test('gets manager email', () => {
    const manager = new Manager('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Manager', 1);
    expect(manager.getEmail()).toBe('misterManager@fakeMail.com');
    //console.log(manager.getEmail());
});

test('gets manager role', () => {
    const manager = new Manager('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Manager', 1);
    expect(manager.getRole()).toBe('Manager');
    //console.log(manager.getRole());
});

test('gets manager office number', () => {
    const manager = new Manager('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Manager', 1);
    expect(manager.getOfficeNumber()).toBe(1);
    //console.log(manager.getOfficeNumber());
});