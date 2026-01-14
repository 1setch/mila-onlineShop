// BurgerButton.tsx
interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const BurgerButton = ({ isOpen, onClick }: BurgerButtonProps) => {
  return (
    <button onClick={onClick}>
      {isOpen ? "✕" : "☰"}
    </button>
  );
};

export default BurgerButton;
