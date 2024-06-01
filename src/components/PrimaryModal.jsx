function PrimaryModal({ children }) {
  return (
    <PrimaryModalContext.Provider
      value={{ openName, setOpenName, close, open }}
    >
      {children}
    </PrimaryModalContext.Provider>
  );
}

export default PrimaryModal;
