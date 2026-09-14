// import { motion, AnimatePresence, type Variants } from "framer-motion";
// const loginVariant = {
//   hidden: {
//     opacity: 0,
//     x: "100vw",
//   },

//   visible: {
//     opacity: 1,
//     x: 0,
//   },
// };

const LoginModal = ({
  successRate,
  errorMessage,
  successRate1,
}: {
  successRate: boolean;
  errorMessage: Error | null; //coming from signup form error
  successRate1: boolean;
}) => {
  return (
    <div className="size-full absolute flex justify-center items-center">
      {successRate && (
        <div className="w-[300px] h-[200px] fixed z-50">
          <div className="bg-white size-full rounded-2xl">
            <div className="size-full text-center bg-white">
              <p className="text-xl font-Runtime text-black">
                {successRate ? "Sign up successfully" : errorMessage?.message}
              </p>
            </div>
          </div>
        </div>
      )}

      {successRate1 && (
        <div className="w-[300px] h-[200px] fixed z-50">
          <div className="bg-white size-full rounded-2xl flex justify-center items-center">
            <div className="w-[250px] h-[150px] text-center bg-white">
              <p className="text-xl font-Runtime text-black">
                {errorMessage?.message}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
