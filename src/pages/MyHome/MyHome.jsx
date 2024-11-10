import DefaultRow from "../../components/DefaultRow/DefaultRow";
import "./styles.css"

const names = [
    "Alex", "Ben", "Cara", "Dan", "Eva", "Finn", "Gina", "Hugo", "Ivy", "Jack",
    "Kate", "Leo", "Mia", "Nina", "Omar", "Pia", "Quinn", "Ray", "Sara", "Tom",
    "Uma", "Vera", "Will", "Xena", "Yara", "Zane", "Anna", "Bill", "Clara", "Dave",
    "Emma", "Frank", "Grace", "Henry", "Iris", "Jake", "Lara", "Mark", "Nora", "Oscar",
    "Paul", "Rita", "Sam", "Tina", "Vic", "Wade", "Xavi", "Yuri", "Zara", "Josh"
  ];

function MyHome(){
    return(
        <div className="myHome">
            <div className="devicesListArea">
                {names.map(name => (
                    <DefaultRow name={name}/>
                ))}
                <DefaultRow name={"interruptor"}/>
            </div>
        </div>
    )
}

export default MyHome;