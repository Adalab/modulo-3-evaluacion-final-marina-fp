const FilterByName = (props) => {
  const handleChange = (e) => {
    //props.handleFilter('name',e.target.value);
    props.handleFilter({
      key: "name",
      value: e.target.value,
    });
  };
  return (
    <div className='filter__form--name'>
      <label
        className='filter__form--label'
        htmlFor='name'
        placeholder='Search'
      >
        Show me what you got!
      </label>
      <input
        className='filter__form--input'
        type='text'
        name='name'
        id='name'
        onChange={handleChange}
        value={props.name}
      />
    </div>
  );
};
export default FilterByName;
