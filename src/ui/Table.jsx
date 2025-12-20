function Table({ children }) {
  return (
    <div className="bg-white border border-blue-100 rounded-lg overflow-x-auto">
      <table className="w-full  bg-blue-50 border-collapse">{children}</table>
    </div>
  );
}
export default Table;
