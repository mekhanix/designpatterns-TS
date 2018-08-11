import { ConcreteSubject, Observer_One, Observer_Two } from "./Observer";

const mainSubject = new ConcreteSubject();
const observer_one = new Observer_One(mainSubject);
const observer_two = new Observer_Two(mainSubject);

observer_one.display(); 
observer_two.display();

mainSubject.setValue(0,0,0);
observer_one.display();
observer_two.display();

mainSubject.setValue(3,2,3);
observer_one.display();
observer_two.display();

mainSubject.detach(observer_one);

mainSubject.setValue(5,5,5);
observer_one.display();
observer_two.display();