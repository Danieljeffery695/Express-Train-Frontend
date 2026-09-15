import { motion, AnimatePresence, type Variants } from "framer-motion";
const loginVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      type: "spring",
      stiffness: 20,
    },
  },

  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeInOut",
      type: "tween",
      stiffness: 20,
    },
  },
};

const LoginModal = ({
  successRate,
  errorMessage,
  successRate1,
}: {
  successRate: boolean;
  errorMessage: Error | null; //coming from signup form error
  successRate1: boolean;
}) => {
  console.log(successRate1);

  return (
    <div className="size-full absolute flex justify-center items-center">
      <AnimatePresence initial={false}>
        {successRate && (
          <motion.div
            variants={loginVariant as Variants}
            initial="hidden"
            animate="visible"
            exit={{
              x: 5000,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                type: "tween",
                stiffness: 20,
              },
            }}
            className="w-[300px] h-[200px] fixed z-50"
          >
            <div className="bg-white size-full rounded-2xl flex justify-center items-center">
              <div className="w-[250px] h-[150px] text-center bg-white">
                <p className="text-xl font-Runtime text-black">
                  {successRate ? "Sign up successfully" : errorMessage?.message}{" "}
                  {/*errorMessage is literally not need here because this modal is used for successful message from backend server but uncertain things can happen */}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error message not coming from backend server */}

      <AnimatePresence initial={false}>
        {successRate1 && (
          <motion.div
            variants={loginVariant as Variants}
            initial="hidden"
            animate="visible"
            exit={{
              x: 5000,
              transition: {
                duration: 0.4,
                ease: "easeInOut",
                type: "tween",
                stiffness: 20,
              },
            }}
            className="w-[300px] h-[200px] fixed z-50"
          >
            <div className="bg-white size-full rounded-2xl flex justify-center items-center">
              <div className="w-[250px] h-[150px] text-center bg-white">
                <p className="text-xl font-Runtime text-black">
                  {errorMessage?.message}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginModal;
