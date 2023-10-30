export default function Item({ name, quantity, category, onSelect }) {
    return (
      <div 
        className="border border-sky-500 bg-sky-800 w-full max-w-xs m-3 p-2 cursor-pointer hover:bg-sky-700"
        onClick={() => onSelect(name)} 
      >
        <h3 className="text-xl font-bold">{name}</h3>
        <p>quantity: {quantity}</p>
        <p>category: {category}</p>
      </div>
    );
};
