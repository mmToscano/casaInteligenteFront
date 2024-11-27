import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";

import APIURL from "../../variaveisGlobais";

function DefaultRow({ idcomodo, name, to, state, addState }) {
  const [inputValue, setInputValue] = useState("");

  // Handle input changes
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handle POST request on button click
  const handleAddRoom = async () => {
    if (!inputValue.trim()) {
      alert("O campo não pode estar vazio!");
      return;
    }

    try {
      const response = await fetch(`${APIURL}/comodos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ NOME_COMODO: inputValue }),
      });

      if (response.ok) {
        alert("Cômodo adicionado com sucesso!");
        setInputValue(""); // Clear the input field
        window.location.reload();
      } else {
        alert("Erro ao adicionar o cômodo.");
      }
    } catch (error) {
      console.error("Erro ao adicionar o cômodo:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  const handleDeleteRoom = async() => {
    const confirmed = window.confirm("Certeza de que deseja deletar este quarto?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${APIURL}/comodo/${idcomodo}`, {
        method: "DELETE",
      });

      if (response.ok) {
        // Update the state to remove the deleted item
        alert("Item deleted successfully!");
        window.location.reload();
      } else {
        throw new Error("Failed to delete the item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting the item. Please try again.");
    }
  }

  return (
    <>
      {addState === false ? (
        <div className={styles.defaultRow}>
          <Link to={to} state={state}>
            <h1>{name}</h1>
          </Link>
          <button onClick={handleDeleteRoom}>
            <FaTrash />
          </button>
        </div>
      ) : (
        <div className={styles.inputRow}>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Digite o nome do cômodo"
          />
          <button onClick={handleAddRoom}>Adicionar cômodo</button>
        </div>
      )}
    </>
  );
}

export default DefaultRow;
