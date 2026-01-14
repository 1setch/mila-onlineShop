// CartIcon.tsx
interface CartIconProps {
  size?: number;
  className?: string;
}

const CartIcon = ({ size = 24, className }: CartIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M4 16H40L36.4 39H7.6L4 16Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22 6V16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M22.4956 32.196C21.385 32.196 20.4983 31.8693 19.8356 31.216C19.1823 30.5533 18.8556 29.564 18.8556 28.248V25.952C18.8556 24.6453 19.1823 23.6607 19.8356 22.998C20.4983 22.3353 21.385 22.004 22.4956 22.004C23.6156 22.004 24.5023 22.3353 25.1556 22.998C25.8183 23.6607 26.1496 24.6453 26.1496 25.952V28.248C26.1496 29.564 25.8183 30.5533 25.1556 31.216C24.5023 31.8693 23.6156 32.196 22.4956 32.196Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CartIcon;

