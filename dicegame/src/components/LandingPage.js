import styles from "./Landing.module.css";

function LandingPage({toggle}){
    return(
        <>
           <div className={styles.container}>
                <div className={styles.cont_image}>
                      <img className={styles.cont_image} src="/images/dices 1.png" alt="dice" />
                </div>
                <div className={styles.right}>
                      <div className={styles.text_field}>
                          <h1>DICE GAME</h1>
                          <button id="btn" onClick={toggle}>Play Now</button>
                      </div>
                </div>
           </div>
        </>
    );
}


export default LandingPage;