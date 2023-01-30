import { useState } from "react";

const Home = () => {

const [Name,setName] = useState('Ali Husnain');
const [age,setAge] = useState("30")

    const Hocks = ()=>{
        setAge(25);
        setName("Hamza Ali");
    }

    // const eventHandal = (name ,e) =>{
    //     console.log(name,e.target);
    // }

    // const eventHandalAgain = () =>{
    //     alert("Evant called !");
    // }

    return ( 
            <div className="home">
                <h2>
                    This is Home Page!
                </h2>

                {/* <button onClick={(e)=>eventHandal("ali",e) }>Cleck Me</button> */}


                {/* <button onClick={ eventHandalAgain }>Cleck Me Agian</button> */}
                <p>Name is {Name} and Age is {age}</p>

                <button onClick={ Hocks }>Cleck Me</button>


            </div>
     );
}

export default Home;