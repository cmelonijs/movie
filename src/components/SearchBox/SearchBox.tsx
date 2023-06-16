interface Props {
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox = ({ setSearchTerm }: Props) => {
  return (
    <input
      onChange={(e) => setSearchTerm(e.target.value.trim())}
      className="block p-4 pl-10 focus:outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:border-blue-500 dark:bg-gray-600 dark:placeholder:gray-400 dark:text-white"
      type="search"
      placeholder="Search..."
    />
  );
};

export default SearchBox;
