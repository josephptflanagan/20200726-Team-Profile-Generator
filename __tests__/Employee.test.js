const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Mr. Manager');
    expect(employee.name).toBe('Mr. Manager');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.role).toBe('Employee');

    //console.log(employee);
});

test('gets employee name', () => {
    const employee = new Employee('Mr. Manager', 1, 'misterManager@fakeMail.com');
    expect(employee.getName()).toBe('Mr. Manager');
    //console.log(employee.getName());
});

test('gets employee id', () => {
    const employee = new Employee('Mr. Manager', 1, 'misterManager@fakeMail.com');
    expect(employee.getId()).toBe(1);
    //console.log(employee.getId());
});

test('gets employee email', () => {
    const employee = new Employee('Mr. Manager', 1, 'misterManager@fakeMail.com');
    expect(employee.getEmail()).toBe('misterManager@fakeMail.com');
    //console.log(employee.getEmail());
});

test('gets employee role', () => {
    const employee = new Employee('Mr. Manager', 1, 'misterManager@fakeMail.com');
    expect(employee.getRole()).toBe('Employee');
    //console.log(employee.getRole());
});