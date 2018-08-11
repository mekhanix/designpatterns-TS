/**
 * Define a one-to-many dependency between objects so that when one object changes
 * state, all its dependents are notified and updated automatically.
 */

interface Observer {
    update(a:number, b:number, c:number):void;
}

interface Subject {
    attach(o:Observer):void;
    detach(o:Observer):void;
    notify():void;
}

class ConcreteSubject implements Subject {
    private observers:Array<Observer>;
    private aValue: number = 0;
    private bValue: number = 0;
    private cValue: number = 0;

    constructor() {
        this.observers = [];
    }

    attach(o:Observer): void {
        this.observers.push(o);
    }
    
    detach(o:Observer): void {
        let i:number = this.observers.indexOf(o);
        this.observers.splice(i);
    }

    notify(): void {
        this.observers.forEach(obs => {
            obs.update(this.aValue, this.bValue, this.cValue);
        });
    }

    setValue(aValue:number, bValue:number, cValue:number) {
        this.aValue = aValue;
        this.bValue = bValue;
        this.cValue = cValue;
        this.notify();
    }


}

/**
 * Observer_One and Observer_Two have different display() implementations
 */
class Observer_One implements Observer {
    private a:number = 0;
    private b:number = 0;
    private c:number = 0;
    private subject:Subject;

    constructor(subject:Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    update(a: number, b: number, c: number): void {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    display() {
        console.log(this.a + this.b + this.c);
    }
}

class Observer_Two implements Observer {
    private a: number = 0;
    private b: number = 0;
    private c: number = 0;
    private subject:Subject;

    constructor(subject:Subject) {
        this.subject = subject;
        this.subject.attach(this);
    }

    update(a: number, b: number, c: number): void {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    display() {
        console.log(this.a * this.b * this.c);
    }
}

export { Observer_One, Observer_Two, ConcreteSubject };

