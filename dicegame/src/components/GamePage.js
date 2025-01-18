import styles from "./Gameplay.module.css";

export default function GamePage({total_score , resetScore ,  visible , diceGameReset , gameRules ,showDiceValue , userInput
  , ErrMessage , ErrVisible , diceRollValue , userInputValue , prevDiceRoll}) 
  {

   const userInput_number = (value) =>{
       if(userInput){
          userInput(value);
       }
   }

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.score}>
          <h1>{total_score}</h1>
        </div>
        <div className={styles.select_number}>
          <button className={styles.number} id="one" onClick={() => userInput_number(1)}>
            1
          </button>
          <button className={styles.number} id="two" onClick={() => userInput_number(2)}>
            2
          </button>
          <button className={styles.number} id="three" onClick={() => userInput_number(3)}>
            3
          </button>
          <button className={styles.number} onClick={() => userInput_number(4)}>4</button>
          <button className={styles.number} onClick={() => userInput_number(5)}>5</button>
          <button className={styles.number} onClick={() => userInput_number(6)}>6</button>
        </div>
      </nav>
      <div className={styles.score_box}>
        <div className={styles.total_score}>
          <h3>Total Score</h3>
        </div>
        <div className="select_number">
          <h3>Select Number</h3>
        </div>
      </div>
      <br />

      <div className={styles.dice_roll}>
           <div className={styles.dice_img_cont}>
               <img onClick={showDiceValue} className={styles.dice_img} src="/images/cubes_gambling_n_02 1.png" alt="dice" />
           </div>
           <h3>Click to roll dice</h3>
           <button className={styles.reset_dice_btn} onClick={resetScore}>Reset Score</button>
           <br />
           <br />
           <button className={styles.show_rules_btn} onClick={diceGameReset}>Show Rules</button>
      </div>

      <div className="value_table">
           <p>Dice rolled to :{(diceRollValue === undefined)? prevDiceRoll : diceRollValue}</p>
           <p>Number selected :{userInputValue}</p>
      </div>

      {ErrVisible && (<p style={{color:"red" , marginLeft:"565px" , fontFamily:"sans-serif"}}>{ErrMessage}</p>)}
        
        {visible && (<div style={{height:"80px" , width:"400px" , border:"1px dotted black" , 
          borderRadius:"4px" , margin:"0 auto" , marginTop:"15px"}}>
          {gameRules}
        </div>)}
      <br />
    </div>
  );
}
