/**
 * Define a family of algorithms, encapsulate each one, and make them interchangeable. 
 * Strategy lets the algorithm vary independently from clients that use it.
 */

interface IBehaviour {
    behaviour():void;
}

export class Behaviour1 implements IBehaviour {
    behaviour() {
        console.log('behaviour 1')    
    }
}

export class Behaviour2 implements IBehaviour {
    behaviour() {
        console.log('behaviour 2')    
    }
}

export class Context {
    private iBehaviour:IBehaviour;
    constructor(behaviour:IBehaviour) {
        this.iBehaviour = behaviour;
    }

    public setBehaviour(behaviour:IBehaviour) {
        this.iBehaviour = behaviour;
    }

    public executeBehaviour() {
        return this.iBehaviour.behaviour();      
    }
}


