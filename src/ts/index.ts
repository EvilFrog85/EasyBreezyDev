/*
Why use TS?

TypeScript is an object-oriented programming language developed by Microsoft Corporation, 
whereas JavaScript is the programming language for the web. TypeScript is a superset of 
JavaScript so you can always mix and match when need be, but there is probably a better 
TypeScript option if you search for one. You probably know that JavaScript comes in  new 
versions from time to time. Most new features has already been covered by TypeScript since 
long ago.

TypeScript needs to be compiled into JavaScript before you can use it on your web server. 
The "tsc" command is used to trigger the transpile and takes a set of useful parameters. 
Any .js file can be changed into a .ts file and still function as expected, once compiled. 
Any and all JS-librarys are supported in TS. TypeScript is not specific to any single 
environment.

Main features of TypeScript are:
- Object oriented
- Static typing
- Interface support

Main advantages of TypeScript are:
- Find compilation errors at the time of development (pre-compilation)
- Strong typing
- Choose what JavaScript version to compile to and support functions not otherwise available


If you are new to JavaScript, TypeScript is the way to go, otherwise there are some initial 
obstacles that you'll struggle with at some point:
https://javascript.plainenglish.io/weird-parts-of-javascript-comparisons-and-arithmetic-df98e5d1053e
*/


// Strict typing on variables
const variable1: number = 10;
const variable2: number = 10;

// Function enforcing typing
function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

const product = multiply(variable1, variable2);
console.log( product );


// Working with objects and interfaces
let userObj: UserObject = {
    name: "John Doe",
    age: 25,
    driversLicence: true,
    parents: [
        {
            name: "Lisa Doe",
            age: 50,
            driversLicence: true,
        },
        {
            name: "Bert Doe",
            age: 48,
            driversLicence: false,
            pets: [
                {
                    name: "Tiger",
                    age: 11,
                    species: "Cat",
                    affection: 1
                }
            ]
        }
    ]
};

// Modify prop value
if (userObj.parents && userObj.parents.length > 1) {
    userObj.parents[1].age = 49;

    // Accessing prop values
    console.log( userObj.parents[0].age + userObj.parents[1].age );
}

console.log( userObj );


// Generate HTML using object data
const demoTarget = document.getElementById('demo-target');

if (demoTarget) {
    const el = document.createElement('table');
    el.classList.add('demo-table');
    
    Object.keys(userObj).forEach( (userKey, userIndex) => {
        let value = userObj[userKey as keyof UserObject];;
       
        if (userKey == 'parents')
            value = (value as UserObject[]).map(x => x.name).join(', ');

        el.innerHTML += drawTableRow(userKey, value);
    });
    
    function sanitizeHTML(str: string) {
        /*
        Adding user generated content to innerHTML exposes the site to cross-site 
        scripting attacks. By adding it as textContent we can escape unwanted chars/scripts.
        You can try replacing one value in the object with
        <img src=x onerror='alert(\"XSS Attack\")'>
        and bypass the sanitizeHTML function to see what happens.
        */
        var temp = document.createElement('div');
        temp.textContent = str;
        return temp.innerHTML;
    };
    
    function drawTableRow(colName: string, colValue: any) {
        return `<tr>
            <td>${ sanitizeHTML(colName) }</td>
            <td>${ sanitizeHTML(colValue) }</td>
        </tr>`;
    }

    demoTarget.appendChild(el);
}



interface UserObject {
    name: string;
    age: number;
    driversLicence: boolean;
    parents?: Array<UserObject>;
    pets?: Array<Pet>
}

interface Pet {
    name: string | null;
    age: number;
    species: string;
    affection: Affection
}

enum Affection {
    None = 0,
    Some = 1,
    Lots = 2
}