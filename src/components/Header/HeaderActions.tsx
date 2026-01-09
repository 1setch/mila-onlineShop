import Button from "../Button/Button";
import SearchIcon from "./icons/SearchIcon.tsx";
import CartIcon from "./icons/CartIcon.tsx";

const HeaderActions = () => {
  return (
    <div>
      <Button variant="ghost">Account</Button>
      <Button variant="ghost">
        <SearchIcon />
      </Button>
      <Button variant="ghost">
        <CartIcon />
      </Button>
    </div>
  );
};

export default HeaderActions;
