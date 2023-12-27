import { useEffect, useState } from "react";
import { data, dataType } from "../data/data";

const MultiSelect = () => {
  const [selectItem, setSelectItem] = useState<dataType[]>([]);
  const [searchItem, setSearchItem] = useState<string>("");
  const [filteredItems, setFilteredItems] = useState(data);

  const handleInputChange = (e: any) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = data.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredItems(filteredItems);
  };

  const addItem = (item: dataType) => {
    setSelectItem((prevSelect) => {
      if (prevSelect.includes(item)) {
        const newSelected = prevSelect.filter((i) => i !== item);
        localStorage.setItem("selected", JSON.stringify(newSelected));
        return newSelected;
      } else {
        const newSelected = [...prevSelect, item];
        localStorage.setItem("selected", JSON.stringify(newSelected));
        return newSelected;
      }
    });
  };

  useEffect(() => {
    const storedItems = localStorage.getItem("selected");

    if (storedItems) {
      const parsedItems: dataType[] = JSON.parse(storedItems);

      if (Array.isArray(parsedItems) && parsedItems.length > 0) {
        setSelectItem(parsedItems);
      }
    }
  }, []);

  const submitFunc = (e: any) => {
    e.preventDefault();
    if (selectItem.length > 0) {
      alert("Seçimleriniz : " + selectItem.map((item) => item.name));
    } else {
      alert("Henüz bir seçim yapmadınız.");
    }
  };

  return (
    <form
      onSubmit={(e) => submitFunc(e)}
      className="border border-slate-200 w-[99%] mx-auto md:w-[40%] h-[500px] flex flex-col px-5 py-3 gap-5 bg-slate-50 rounded-lg"
    >
      <div className="text-xl font-medium">Kategoriler</div>
      <div className="flex items-center bg-white border-slate-200 border rounded-md pr-2 hover:border hover:border-blue-500 ">
        <input
          value={searchItem}
          onChange={handleInputChange}
          placeholder="Kategori Ara"
          type="text"
          className="w-full py-2 px-3 rounded-md outline-none "
        />
        <div className="cursor-pointer">
          <img className="w-7 h-7" src="./search.svg" alt="" />
        </div>
      </div>
      {/* {selectItem.length > 0 && (
        <div className="w-full h-14 flex gap-5 overflow-x-auto overflow-y-hidden ">
          {selectItem.map((item, i) => (
            <div
              className={`${
                selectItem.some((selectedItem) => selectedItem.id === item.id)
                  ? "text-blue-500"
                  : ""
              } flex items-center `}
              key={i}
            >
              <input
                className=""
                checked={selectItem.includes(item)}
                onChange={() => addItem(item)}
                type="checkbox"
                name=""
                id=""
              />
              <div className="truncate">{item.name}</div>
            </div>
          ))}
        </div>
      )} */}

      <div className=" w-full h-full overflow-auto flex flex-col gap-3 py-1 rounded-md">
        {selectItem.map((item, i) => (
          <div
            className={`${
              selectItem.some((selectedItem) => selectedItem.id === item.id)
                ? "text-blue-500"
                : ""
            } flex items-center gap-5 text-xl  `}
            key={i}
          >
            <input
              className="cursor-pointer"
              checked={selectItem.includes(item)}
              onChange={() => addItem(item)}
              type="checkbox"
              name=""
              id=""
            />
            <div onClick={() => addItem(item)} className=" cursor-pointer">
              {item.name}
            </div>
          </div>
        ))}
        {filteredItems.map(
          (item, i) =>
            !selectItem.some((selectedItem) => selectedItem.id === item.id) && (
              <div
                className={`${
                  selectItem.some((selectedItem) => selectedItem.id === item.id)
                    ? "text-blue-500"
                    : ""
                } flex items-center gap-5 text-xl `}
                key={i}
              >
                <input
                  className="cursor-pointer"
                  checked={selectItem.includes(item)}
                  onChange={() => addItem(item)}
                  type="checkbox"
                  name=""
                  id=""
                />

                <div className="cursor-pointer" onClick={() => addItem(item)}>
                  {item.name}
                </div>
              </div>
            )
        )}
        {filteredItems.length === 0 && <div>Sonuç Bulunamadı</div>}
      </div>

      <button
        type="submit"
        className="w-full text-center bg-blue-600 py-2 text-xl font-medium rounded-md text-white hover:bg-blue-500"
      >
        Ara
      </button>
    </form>
  );
};

export default MultiSelect;
