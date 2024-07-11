import "./SingleCard.css";
/**
 * A functional component that represents a single card in a memory game.
 */
export default function SingleCard({ card, handleChoice, flipped, disabled }) {
  /**
   * Handles the click event on the card.
   * If the card is not disabled, it calls the handleChoice function with the card object.
   */
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card front" />
        <img
          className="back"
          src="/img/cover.png"
          onClick={handleClick}
          alt="card back"
        />
      </div>
    </div>
  );
}
