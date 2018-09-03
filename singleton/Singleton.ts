/**
 * Ensure a class has only one instance, and provide a global point of access to it.
 */
export class Singleton {
    private static singletonInstance:Singleton = new Singleton();

    private constructor () { }

    public static getInstance():Singleton {
        return this.singletonInstance;
    }

    main() {
        console.log('hello world!');
    }
}
