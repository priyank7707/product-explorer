interface FiltersProps {
  categories: string[];
  category: string;
  onCategoryChange: (value: string) => void;
  sortOrder: string;
  onSortChange: (value: string) => void;
}

function Filters({
  categories,
  category,
  onCategoryChange,
  sortOrder,
  onSortChange,
}: FiltersProps) {
  return (
    <div className="filters">
      <div className="filter-control">
        <label htmlFor="category">Category</label>

        <select
          id="category"
          value={category}
          onChange={(event) => onCategoryChange(event.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-control">
        <label htmlFor="sort">Sort by</label>

        <select
          id="sort"
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">Featured</option>
          <option value="low-to-high">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
}

export default Filters;