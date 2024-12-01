import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import APIURL from "../../variaveisGlobais";

function DefaultRow({ idcomodo, name, to, addState }) {
  const [inputValue, setInputValue] = useState("");


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

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
        setInputValue("");
        window.location.reload();
      } else {
        alert("Erro ao adicionar o cômodo.");
      }
    } catch (error) {
      console.error("Erro ao adicionar o cômodo:", error);
      alert("Ocorreu um erro. Tente novamente.");
    }
  };

  const handleDeleteRoom = async () => {
    const confirmed = window.confirm("Certeza de que deseja deletar este quarto?");
    if (!confirmed) return;

    try {
      const response = await fetch(`${APIURL}/comodo/${idcomodo}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Item deleted successfully!");
        window.location.reload();
      } else {
        throw new Error("Failed to delete the item");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      alert("Error deleting the item. Please try again.");
    }
  };

  return (
    <>
      {!addState ? (
        <div className={styles.defaultRow}>
          <Link to={to.pathname || "#"} state={to.state}>
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
