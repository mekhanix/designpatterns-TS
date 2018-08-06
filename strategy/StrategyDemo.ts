import { Context, Behaviour1, Behaviour2 } from "./Strategy";

const con = new Context(new Behaviour1);
con.executeBehaviour();
console.log('change behaviour at runtime...');
con.setBehaviour(new Behaviour2);
con.executeBehaviour();