import React, { useState } from "react";
import Icon from "./Components/Icon";

/*All are coming from npm docs*/

/*************ReactTostify**************/
/*
 Refference:
 * https://www.npmjs.com/package/react-toastify
 * https://fkhadra.github.io/react-toastify/introduction
 */
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**************ReactStrap************** */
/*
Refference: 
* https://www.npmjs.com/package/reactstrap
* https://6-4-0--reactstrap.netlify.app/components/modals/
*/
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

/**************@futherProcessHint**************/
/*
As we know in tic tac toi application we've got
9 defference Icon on which the player can play
So, all this 9 defferent icons are gonna have somethings
either a pen icon Or circle icon Or cross icon So, for 
that i create 9 array.
 */

const itemArray = new Array(9).fill("empty");
//simple mens ["empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty"]

const App = () => {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("Circle Wins");

  /**********************************************************************************************************************
  2nd When we want to reload the game basically we want to set all our state back to there original
    Position let' do that so we don't want to change the state directly we always call there method
    setIsCross + we'r gonna set which is (false) which is default stage = setIsCross("false") after
    that we want to set setWinMessage + we'r gonna set which is ("") + setWinMessage("") SideNote (but that's 
    Not it just because we got two states that doesn't mean that's all gonna required to reset the game)
    @furtherMore we've got itemArray which is being filled up here. SideNote(you can also make this itemArry)
    As a part of state as well) But we don't want to hit reloade button every single time whenever things are 
    there so we don't want to do that But, it all of to us. if you want to do that as a beggner you can do that No
    Problem but here not we use. So, user thins itemArray.fill + methods notice you can start with (value,startVal, EndVal)
    @👋As soon as Reload button being hit we can simply go ahead & reload the game.
    GoFurther ➡️ ChangeItem.
    what next Do: we'r gonna determined the chang of Item. So, How we'r going to change The Value of the item.
    @GoChangeItem fuction.
    ********************************************************************************************************************/

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };
 
  /*
  FinalPortion of this game to more clear concept need to watch hitesh sir tic toc toi youtube video.
  there mention first determined all the value in row ➡️ base on index then on the column ⬇️ then on the digonals ♦️ ❌ 
  & also check it's empty or not.
  let's first check the row if the position at zero value is equal === itemArray[1] put && condtion
  then also again check weather the same value at zero th position itemArry[0]=== itemArray[2] Is also equal to position No. 2
  we need to check one more thing if we'r not checking everything against the empty so let's take an 
  itemArray at the position zero != to "empty"  

  
  */
  const checkIsWinner = () => {
    if(itemArray[0] === itemArray[1] && 
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"){
        setWinMessage(`${itemArray[0]} wins`)
      }
  };

  /**********************************************************************************************************************************************
   (3) one What do i mean by Change Item with the word change
    Item it simply means Somebuddy click on the buttons
    it's gonna varify weather the icon should change or
    not. weather it is being already filled or not 
    we'r going need this itemNumber why this becasuse
    How'we'r gonna know on which card or the button the
    user acutully clicking we'r gonna need that.
    
   ********************************************************************************************************************************************** 
    @after reloadGame process theory portion::
    Firstly,we check The winmessage Is there or not if the winMessage is going to set something we just return toast + & toast is required to pass 
    two things() inside one One is message anther thing Where & what type of toast you'r having So the is coming from directly winMeassge directly,
    & pass on some option inside one {} which one is exactly a postion & type of toast you want. so the type that i want {type:success} you can pass
    whole lot of animation, & do a amazing thing wiht toast.@if the winMessage are not ther & still it's empty we want to keep moving & we want to 
    flip the values between the cross & circle. let's make a condition first & check it if() if at the position in itemArray.

    *whenever i say itemArray i mean to say all this 9 boxes bcz are gonna have some of the val we'll do in min firstly, if any position of itemArray
    remember sombuddys is giving itemNumber & that itemNumber is exactly is the position of that 9 block ok. if itemArray[itemNum] is equal to "empty"
    then only we want to run this one. o.w that's already being filled up. we really don't want to say that. we can atually else part solve.
    if the item is not empty then we simply want to return a message toast error.

    **********************************************************************************************************************************************
    Now, come back to one. what if it is empty then we'r gonna come back into item array at the same postion itemArray[itemNumber]
    & this item is gonna filled up by the value = but first & fourmost we need to determind how this gonna be filled up. So, follow
    along here so we'r gonna be checking here this value base on 'isCross' if cross is true that do something ? : o.w do something
    if ?true that value is gonna be 'cross' o.w the value is gonna be :'circle'
    **********************************************************************************************************************************************
    Now, notice here ternary part on that partcular item (e.g itemArray[itemNumber]) of that particular position of an array just fill
    up the value see e.g [itemNumber] we'r not changing anything as of now. once the value in tha array is being change that we can simpl
    go ahead & call this guy setIsCross+ & we'r gonna just flip the switch whatever the value was  initially we just want to flip that bcz 
    remember in this guy cheack we'r setting up value "false" see line no. 39 & 61 nearBy & exact.
    So, one the guy has taken his turn weather it is cross or 0 we just need to flip the switch. howdowedothat use !exclamentry.
    the value is gonna be flip next time. ok. 
    **********************************************************************************************************************************************
    @conclued
    one all this thing are done. that you've checked weather the win message or not that's need to be at top then after you check weather the value 
    is empty or not or should he be running after every single move whatever you have played cross or 0 we want to check for do we got winner or not.
    so we'r use this checkIsWinner() as a methods & that's it. if you check above the value is empty. for the time being. we fill it very soon.
    but this what we've got so for. write now our application is not checking winner but apart that it's always ready to display whatever you want to
    display display at <container></container> bottom one. firstly just go belew the <Col md={6}> this is where we would display the message inser some 
    {js code her} base on {winMessage we'r gonna do something.if is there o.w :we'r do something nice & easy what we'r gonna do. if this is there
    ? after we this () if win message ther use display that nicely we'r gonna be useing <div/> we'r gonna go inside this one.
    
    inside one h1 inside one insert {winMessasge} onece the msg is being disply hey you won here it makes sence to provide the user you'r
    now allow to reload the game as well. next use <Button> use classname use onclick methods previously we'were saying whenever we use onClick
    we need this {()=>{}} something like that in case your methode is defined you can call this method directly like {reloadGame} not like this 
    reloadGame() this is going to run immediately. when remove this one( ) it will run on click one more this is remaining
    one more thing is remaining what if if the win message is not ther who's turn it is acutually either the circle or cross hit ente into else part
    write some <h1/> inside some className onece you'r inside this{} we would like to insert code 'determined the value that you want to display here'
    base on isCross if it is true then 'cross' do this O.w if is false do this "circle" it's gonna display meg base on that.
    this whole thing ➡️{isCross ? "Cross" : "Circle"} is gonna evalute either the cross or circle & after that we cancatinating with turns msg who's turn
    it is basically look nice but it's not gonna work.
    
    @goFurther on top try to add some value in winMessage useState("Circle winds") if you want to try O.w not. this one is gonna is empty..as of now.
    Now, move to CheckIsWinner();
    *********************************************************************************************************************************************/

  const changeItem = (itemNumber) => {
    if (winMessage) {
      return toast(winMessage, { type: "success" });
    }
    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }
    checkIsWinner();
  };

  /***************************************************************************************
  1st Bootstrap is all about Road & column we'r introducing a row inside this one
    we'r introducing col which is mandatory you need to tell what's gonna be width
    or How many item you want to consume in the md scale consume 6 then we need to 
    mention className of it when i say offset-md-3 it mean come in center once this
    put some message into this but befour firstly I want to crete a division inside/into it
    we can at least see how the grid is gonna look like let's go ahead & do that. simply call 
    <div> here.
    now it's time to introduces some Js code here call your itemArry line no. 34 
    & we want to use map it simply mean i simply loop throught it when you loop through
    tem it gives a callback it expect item for accessing & 2nd is index for not repeting 
    the stuff.
    Inside CardBody i need to return icon components this needs to be pass a property 
    now inside our array now everthing is empty that's why gonna return default value
    what you've se inside array
    <Card> is gonna come from bootstrap inside it gonna use <cardBody> 
    ********************************************************************************************/

  return (
    <Container className='p-5'>
      <ToastContainer position='bottom-center' />
      <Row>
        <Col md={6} className='offset-md-3'>
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {winMessage}
              </h1>
              <Button color='success' block onClick={reloadGame}>
                Reload the game
              </Button>
            </div>
          ) : (
            <h1 className='text-center text-warning'>
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item, index) => {
              return (
                <Card color="warning" onClick={()=>changeItem(index)}>
                  <CardBody className='box'>
                    <Icon name={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default App;

/* @2ndlastPorttioninside <card/> =>
The task button is suppose to be click able then want to determinded as well so we've some 
on click methods you can place it anywhere you like. use onclick on <card onclick={()=>()}>.
we'r gonna fireing up inside onclick methods(watch game to clear concept.) 👆 we usually get 
callback here. but we've notice we can atucally call directly some kind of stuff here just like 
we did on above code you can call reloadgame line 166.
So,i would like to really call 'changeItem' which is responsible for changing the item if you noticed
so we've change item on line no. 125 which expect to pass on itemNumber or in this case we've index
so, i don't have any way to pass this on if i use this dirctly into a onclick=(here) like changeItem(); it's gonna run my 
methods directly i don't want that to happen but i can also do kind of in bet'n of firing up a callback & making
this methods long & as well as use this items it's hack or say's it's syntax.
remember we'were having this kind of callback methods {()=>{}} So {}instead of having callback & writing all the methods
here what we can do we can call this methods inside a callback {()=>changeItem} we'r gonna simply say changeItem now i cna
actually run this which gonna not run dirctly this becz it's gonna fireup callback whenever Somebuddy click it's not directly
with parenthesis now i can pass this index in (index) to make card colorful use color property. right now it just flip the switch.

So, let's check who's winner or not for that you need to go on your ::=> "checkIsWinner()" section.

*/