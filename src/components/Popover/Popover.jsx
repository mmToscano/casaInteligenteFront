import styles from "./styles.module.css"

function Popover(){


    const rooms = ["garagem", "quarto","garagem", "quarto","garagem", "quarto","garagem", "quarto","garagem", "quarto"]

    return(
        <div className={styles.popover}>
            {rooms.map(room => (
                <button>{room}</button>
            ))}
        </div>
    )
}

export default Popover;