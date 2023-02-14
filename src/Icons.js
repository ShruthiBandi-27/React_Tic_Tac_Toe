import { FaSmileWink, FaRegCircle, FaTimes } from "react-icons/fa";
export default function Icons({ value }) {
  // return <FaSmileWink />;
  // return (
  //   <>
  //     {value === "empty" ? (
  //       <FaSmileWink />
  //     ) : value === "circle" ? (
  //       <FaRegCircle />
  //     ) : (
  //       <FaTimes />
  //     )}
  //   </>
  // );

  switch (value) {
    case "circle":
      return <FaRegCircle className="icon" />;
    case "cross":
      return <FaTimes className="icon" />;
    default:
      return <FaSmileWink className="icon" />;
  }
}
