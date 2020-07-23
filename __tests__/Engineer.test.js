const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Mr. Manager');
    expect(engineer.name).toBe('Mr. Manager');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.role).toBe('Engineer');
    expect(engineer.gitHub).toEqual(expect.any(String));

    //console.log(engineer);
});

test('gets engineer name', () => {
    const engineer = new Engineer('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Engineer', 'mrManager1');
    expect(engineer.getName()).toBe('Mr. Manager');
    //console.log(engineer.getName());
});

test('gets engineer id', () => {
    const engineer = new Engineer('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Engineer', 'mrManager1');
    expect(engineer.getId()).toBe(1);
    //console.log(engineer.getId());
});

test('gets engineer email', () => {
    const engineer = new Engineer('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Engineer', 'mrManager1');
    expect(engineer.getEmail()).toBe('misterManager@fakeMail.com');
    //console.log(engineer.getEmail());
});

test('gets engineer role', () => {
    const engineer = new Engineer('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Engineer', 'mrManager1');
    expect(engineer.getRole()).toBe('Engineer');
    //console.log(engineer.getRole());
});

test('gets manager GitHub', () => {
    const manager = new Engineer('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Engineer', 'mrManager1');
    expect(manager.getGitHub()).toEqual(expect.any(String));
    //console.log(engineer.getGitHub());
});