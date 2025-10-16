import { Search } from "lucide-react";
const SearchBar = ({ setSearchTerm }) => {
  return (
    <div className="">
      <form className="mt-5">
        <input
          type="text"
          className="border-coffee-brown/30 w-[80%] border-b-1 p-3 tracking-widest outline-0"
          placeholder="Input Coffee Name"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
};

export default SearchBar;
