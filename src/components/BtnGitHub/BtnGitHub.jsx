import icon from "./gitHub-black.svg";
import "./styles.css";

const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={icon} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
