import { CgMail } from "react-icons/cg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="m-2 flex flex-wrap items-center justify-center gap-4 text-xl font-thin tracking-tight ">
        <div className="flex items-center justify-center gap-4">
          <CgMail className="text-4xl " />
          dilan.santatra2000@gmail.com
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaSquareWhatsapp className="text-4xl text-green-500" />
          +261 34 07 630 23
        </div>
        <div className="flex items-center justify-center gap-4">
          <FaTelegram className="text-4xl text-blue-500" />
          +261 34 07 630 23
        </div>
      </div>
    </div>
  );
};

export default Contact;
