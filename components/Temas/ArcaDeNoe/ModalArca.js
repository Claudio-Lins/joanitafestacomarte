import React, { useRef, useEffect, useCallback } from "react";
import { useSpring, animated } from "react-spring";

export const ModalArca = ({ showModal, setShowModal }) => {
    const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? "translateY(0%)" : "translateY(-100%)",
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <div
          ref={modalRef}
          onClick={closeModal}
          className="flex inset-0 absolute justify-center items-center p-8 bg-black min-h-screen min-w-full z-50"
        >
          <animated.div style={animation}>
            <div
              showModal={showModal}
              className="flex justify-center items-center"
            >
              <div className="text-5xl text-white">
                  Conteudo
              </div>
            </div>
            <div
              className="absolute font-bold text-3xl cursor-pointer right-2 -top-6 text-white"
              aria-label="Close Modal"
              onClick={() => setShowModal((prev) => !prev)}
            >
              X
            </div>
          </animated.div>
        </div>
      ) : null}
    </>
  );
};
