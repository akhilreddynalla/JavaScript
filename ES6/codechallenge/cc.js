class Element{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element{
    constructor(name,buildYear,area,numTree){
        super(name,buildYear);
        this.area = area;
        this.numTree = numTree;
    }

    treedenisty(){
        const denisty = this.numTree / this.area ;
        console.log(`${this.name} has tree denisty of ${denisty} per sq km `);
    }
}

class Street extends Element{
    constructor(name,buildYear,length,size = 3){
        super(name,buildYear);
        this.length =length;
        this.size =size;
    }

    classifyStreet () {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];


function calc(arr){
    const sum = arr.reduce((prev, curr , index) => prev+ curr , 0);

    return [sum, sum/arr.length];
}

function reportPark(p){

    // Denisty
    p.forEach(el => el.treedenisty());

    //Average Age
    const ages = p.map( el => new Date().getFullYear() - el.buildYear);
    const [totalAge , avgAge] = calc(ages);

    console.log(`our ${p.length} parks have an average of ${avgAge} years`);

    // which park has more than 1000 trees

    const i = p.map(el => el.numTree).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees`);

}

function reportStreet(s){

    // total and avg length of the town's street 

    const [totlength , avglength] = calc(s.map(el => el.length));

    console.log(`Our ${s.length} streets have a total length of ${totlength} km, with an average of ${avglength} km.`);  

     //classify the sizes
     s.forEach(el => el.classifyStreet());

}

reportPark(allParks);
reportStreet(allStreets);












