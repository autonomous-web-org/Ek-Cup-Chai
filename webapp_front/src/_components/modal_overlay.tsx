

const ModalOveraly = ({ children, closeModal }: { children: any; closeModal: () => void }) => {

    return (
        <div className="fixed top-0 left-0 grid place-items-center w-full h-full bg-secondary/60 backdrop-blur-lg z-[9999]"
         onClick={closeModal}>
            {children}
        </div>
    );
};

export default ModalOveraly;
