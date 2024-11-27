import styles from "./styles.module.css"

function ModalContainer({ onClose, children }) {
   


   return (
      <div className={styles.modalContainer} onClick={onClose}>
         <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={onClose}>
               &times;
            </button>
            {children}
         </div>
      </div>
   )
}

export default ModalContainer