import React, { useState } from "react";
import axios from 'axios';

let formStateData = {
    search: '',
    year: ''
};


function Search() {

    const [selectedYear, setSelectedYear] = useState("");
    const [formData, setFormData] = useState(formStateData);
    const [movieList, setMovieList] = useState([]);

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

        axios.post('http://localhost:4000/api/v1/search', formData)
            .then(function (response) {

                if (response?.data?.data?.['Search']?.length > 0) {
                    console.log(response.data.data['Search']);
                    setMovieList(response.data.data['Search'])
                } else {
                    alert('Movie not found');
                }
            })
            .catch(function (error) {
                console.log(error);
            });

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

                <div className="flex justify-center items-center">
                <ul role="list" className="pt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {movieList.map((movie) => (
                        <li
                            key={movie.imdbID}
                            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
                        >
                            <div className="flex flex-1 flex-col p-8">
                                <img className="mx-auto h-32 w-32 flex-shrink-0 rounded-full" src={movie.Poster} alt="" />
                                <h3 className="mt-6 text-sm font-medium text-gray-900">{movie['Year']}</h3>
                                <dl className="mt-1 flex flex-grow flex-col justify-between">
                                    <dt className="sr-only">Title</dt>
                                    <dd className="text-sm text-red-500">{movie['Title']}</dd>
                                    <dt className="sr-only">Role</dt>
                                    
                                </dl>
                            </div>
                            
                        </li>
                    ))}
                </ul>
                </div>


               
            </div>
        </div>


    );
}

export default Search;