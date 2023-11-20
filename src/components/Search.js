import React, { useState } from "react";

let formStateData = {
    search: '',
    year: ''
};

function Search() {

    const [selectedYear, setSelectedYear] = useState("");
    const [formData, setFormData] = useState(formStateData);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
        const { name, value } = event.target;
        setFormData({ ...formData, ['year']: value });
    };

    const years = Array.from(
        { length: 50 },
        (_, index) => new Date().getFullYear() - index
    );


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div className=" flex justify-center items-center">
            <div className="sm:col-span-3 pt-8">
                <div className="sm:col-span-2 sm:col-start-1">
                    <label htmlFor="city" className="block text-sm font-medium leading-6 text-white">
                        Movie Name
                    </label>
                    <div className="mt-2">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            autoComplete="search"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={formData.search}
                            onChange={handleInputChange}
                            />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label htmlFor="region" className="block text-sm font-medium leading-6 text-white">
                        Year
                    </label>
                    <div className="mt-2">
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
                    {selectedYear && <p className="text-pink">You selected: {selectedYear}</p>}
                       
                    </div>
                </div>

                <div className="sm:col-span-2">
                    
                    <div className="mt-2">
                    <button
                    type="button"
                    placeholder="Search Movie"
                    className="inline-flex items-center rounded-md bg-indigo-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    onClick={handleSubmit}
                    >Search Movie</button>
                    
                    </div>
                </div>


                {/* <div>
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

<div>
<input
        type="text"
        name="username"
        id="username"
        autoComplete="username"
        className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="janesmith"
      />
</div> */}

            </div>
        </div>


    );
}

export default Search;