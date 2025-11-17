import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const [pending, setPending] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    setPending(true);
    // simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setPending(false);
  };

  return (
    <button
      type="submit"
      onClick={handleClick}
      className="group flex items-center justify-center gap-2 h-[4rem] w-[10rem] text-white 
      rounded-full transition-all focus:scale-110 
      hover:scale-110 hover:bg-hover active:scale-105 
      bg-gray-800 border border-white/90 disabled:scale-100 
      disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Abschicken{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
