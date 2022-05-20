
const Search = ({packages, setPackages, searchTerm, setSearchTerm}) => {

  const handleChange = (event) => {
    const text = (event.target.value);
    setSearchTerm(text);
    const filteredPackages = packages.map(item => {
      let stringToCheck = ""
        + (item.location_name ? item.location_name : "")
        + (item.parcel_id ? item.parcel_id : "")
        + (item.sender ? item.sender : "")
        + (item.user_name ? item.user_name : "")
        + (item.user_phone ? item.user_phone : "")
        + (item.notes ? item.notes : "");
      if (!stringToCheck.toLowerCase().includes(text.toLowerCase())) {
        item.hidden = true;
      }
      else item.hidden = false;
      return item;
    });
    setPackages(filteredPackages);
  };

  return (
    <div id="search">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );

}

export default Search;
