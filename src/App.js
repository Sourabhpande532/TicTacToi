import React, { useState } from 'react'
import Icons  from "./Components/Icons"

/*All are coming from npm docs*/

/*************ReactTostify**************/
/*
 Refference:
 * https://www.npmjs.com/package/react-toastify
 * https://fkhadra.github.io/react-toastify/introduction
 */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**************ReactStrap************** */
/*
Refference: 
* https://www.npmjs.com/package/reactstrap
* https://6-4-0--reactstrap.netlify.app/components/modals/
*/
import { Card, CardBody, Container,Button, Col, Row } from 'reactstrap';
import 'reactstrap/dist/css/bootstrap.css';

/**************@futherProcessHint**************/
/*
As we know in tic tac toi application we've got
9 defference Icons on which the player can play
So, all this 9 defferent icons are gonna have somethings
either a pen icon Or circle icon Or cross icon So, for 
that i create 9 array.
 */

const itemArray = new Array(9).fill("empty")
//simple mens ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]


const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");


  const reloadGame = ()=>{
    //
  }
  
  const checkIsWinner = ()=>{
    //
  }

  /*What do i mean by Change Item with the word change
    Item it simply means Somebuddy click on the buttons
    it's gonna varify weather the icon should change or
    not. weather it is being already filled or not 
    we'r going need this itemNumber why this becasuse
    How'we'r gonna know on which card or the button the
    user acutully clicking we'r gonna need that. */

  const changeItem = itemNumber = ()=>{
    //
  }


  return (
    <>
    <div>App</div>
    <Icons/>
    </>

    
  )
}

export default App