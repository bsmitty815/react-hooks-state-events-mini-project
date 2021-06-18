import React from "react";

function CategoryFilter({ categories, categoryClicked, categoriesData }) {

  const categoryButton = categories.map((category) => {
    //we have to create a button on the page that also has an onClick so it can be functional
    const className = category === categoriesData ? "selected" : null;
    return (
    <button
      key={category}
      className={className}
      onClick={() => categoryClicked(category)}
    >
      {category}
    </button>
    )
})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButton}
    </div>
  );
}

export default CategoryFilter;
