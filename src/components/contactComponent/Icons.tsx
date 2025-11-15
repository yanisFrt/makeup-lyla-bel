import {
  BsBrush,
  BsCalendarEvent,
  BsClock,
  BsEnvelopeAt,
  BsTelephone,
} from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { LuUserRound } from "react-icons/lu";

const Icon = ({ name, size = 22, color = "#D4AF37" }) => {
  const props = { size, color };

  switch (name) {
    case "name":
      return <LuUserRound {...props} />;
    case "phone":
      return <BsTelephone {...props} />;
    case "email":
      return <BsEnvelopeAt {...props} />;
    case "brush":
      return <BsBrush {...props} />;
    case "adresse":
      return <FiMapPin {...props} />;
    case "date":
      return <BsCalendarEvent {...props} />;
    case "hour":
      return <BsClock {...props} />;
    default:
      return null;
  }
};

export default Icon;
