const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Mr. Manager');
    expect(intern.name).toBe('Mr. Manager');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.role).toBe('Intern');
    expect(intern.school).toEqual(expect.any(String));

    //console.log(intern);
});

test('gets intern name', () => {
    const intern = new Intern('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Intern', 'Intern University');
    expect(intern.getName()).toBe('Mr. Manager');
    //console.log(intern.getName());
});

test('gets intern id', () => {
    const intern = new Intern('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Intern', 'Intern University');
    expect(intern.getId()).toBe(1);
    //console.log(intern.getId());
});

test('gets intern email', () => {
    const intern = new Intern('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Intern', 'Intern University');
    expect(intern.getEmail()).toBe('misterManager@fakeMail.com');
    //console.log(intern.getEmail());
});

test('gets intern role', () => {
    const intern = new Intern('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Intern', 'Intern University');
    expect(intern.getRole()).toBe('Intern');
    //console.log(intern.getRole());
});

test('gets manager GitHub', () => {
    const manager = new Intern('Mr. Manager', 1, 'misterManager@fakeMail.com', 'Intern', 'Intern University');
    expect(manager.getSchool()).toEqual(expect.any(String));
    //console.log(intern.getGitHub());
});