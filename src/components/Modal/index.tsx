import { motion, AnimatePresence } from 'framer-motion';
import './style.scss';

const backdrop = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const modal = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '40vh',
    opacity: 1,
    transition: { delay: 0.5 },
  },
};

const Modal = ({ showModal }: any) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <motion.div className="custom-modal" variants={modal}>
            <p>Want to make another Pizza?</p>
            <button className="btn main-btn">Start Again</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
