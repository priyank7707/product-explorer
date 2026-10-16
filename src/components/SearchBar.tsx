interface SearchBarProps {
  search: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({ search, onSearchChange }: SearchBarProps) {
  return (
    <div className="search-box">
      <span className="search-icon" aria-hidden="true">
        ⌕
      </span>

      <input
        type="search"
        placeholder="Search products..."
        aria-label="Search products by name"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;