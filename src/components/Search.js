import React, {useState} from "react";
function Search() {

    const [selectedYear, setSelectedYear] = useState("");

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    const years = Array.from(
        { length: 50 },
        (_, index) => new Date().getFullYear() - index
    );


    return (
        <div className="pt-12 grid grid-rows-2 grid-flow-col gap-4">
            <div>
                <input
                    type="text"
                    name="search"
                    id="search"
                    autoComplete="search"
                    className="border border-white focus:outline-none focus:ring focus:border-blue-700 p-10 ml-36  block flex-1 w-1/4 border-0 bg-transparent py-1.5 pl-1 text-white placeholder:text-white focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="Search by title"
                />
            </div>
            <div>
                <select
                    className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    value={selectedYear} onChange={handleYearChange}>
                    <option value="">Select a year</option>
                    {years.map((year) => (
                        <option key={year} value={year}>
                            {year}
                        </option>
                    ))}
                </select>
                {selectedYear && <p>You selected: {selectedYear}</p>}
            </div>

        </div>

    );
}

export default Search;