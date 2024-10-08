interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset'; 
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled, type = 'button' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`relative z-[50] pointer-events-auto bg-orange-darkOrange w-[161px] text-white font-bold uppercase rounded-[30px] transition duration-300 ease-in-out ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-hoverOrange"
      }`}
      style={{ height: "39px" }}
    >
      {children}
    </button>
  );
};
