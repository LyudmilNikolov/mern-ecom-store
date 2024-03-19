import { useState } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Rating = ({ value, text, max, onChange }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const renderIcon = (index) => {
    if (hoveredIndex !== null) {
      return index <= hoveredIndex ? <FaStar /> : <FaRegStar />;
    } else {
      if (index < value) {
        return index + 1 > value && index + 0.5 === value ? <FaStarHalfAlt /> : <FaStar />;
      } else {
        return <FaRegStar />;
      }
    }
  };

  return (
    <div className="rating">
      {Array.from({ length: max }, (_, index) => (
        <span
          key={index}
          tabIndex={0}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => onChange(index + 1)}
          style={{ cursor: 'pointer' }}>
          {renderIcon(index)}
        </span>
      ))}
      {text && <span className="rating-text">{text}</span>}
    </div>
  );
};

export default Rating