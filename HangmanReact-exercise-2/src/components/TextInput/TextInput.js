import React from "react";

// 7. console.log(props.submit)
// 8. props not defined
// 9. classic mistake I always make...  no return statement 
// 10. and { } missing
// 11. but we have to check spelling further
// 12. this.state.guesedLetters is undefined
// 13. check AppContainer line 50


const TextInput = props => {
  return (
    <form onSubmit={props.submit}>
      <input
        type="text"
        maxLength="1"
        value={props.currentChosenLetter}
        disabled={props.gameIsOver ? "disabled" : ""}
        onChange={props.change}
      />
      <input
        type="submit"
        value="guess"
        disabled={props.gameIsOver ? "disabled" : ""}
      />
    </form>
  )
};


  

export default TextInput;
