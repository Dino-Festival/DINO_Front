import InfoData from "../../assets/info/Data.png";
import PropTypes from "prop-types";

const PrivacyModal = ({ onClose }) => {
  return (
    <div className="fixed top-0 right-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded-lg">
        <button className="flex text-red-500 text-[24px]" onClick={onClose}>
          X
        </button>
        <img src={InfoData} alt="Info Data" />
      </div>
    </div>
  );
};

PrivacyModal.propTypes = {
  onClose: PropTypes.node.isRequired,
};

export default PrivacyModal;
