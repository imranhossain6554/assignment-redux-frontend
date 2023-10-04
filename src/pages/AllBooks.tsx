/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { IBooks } from "../types/globalTypes";
import BookCard from "../components/ui/BookCard";
import Navbar from "../components/ui/Navbar";
import { useGetAllBooksQuery } from "../redux/api/apiSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSearchTerm } from "../redux/features/search/serachSlice";
import { Link } from "react-router-dom";

export default function AllBooks() {
  const { data, isLoading, error } = useGetAllBooksQuery(undefined);
  console.log(isLoading, error);

  const searchTerm = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  const handleSearchChange = (e: { target: { value: any } }) => {
    const searchTerm = e.target.value;
    dispatch(setSearchTerm(searchTerm));
  };

  // search filtered by title
  // const filteredData = data?.data?.filter((item: { title: string }) =>
  //   item.title.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const filteredData = data?.data?.filter(
    (item: { title: string; author: string; genre: string }) => {
      const itemValues = Object.values(item).map((value) =>
        value.toString().toLowerCase()
      );

      return itemValues.some((value) =>
        value.includes(searchTerm.toLowerCase())
      );
    }
  );

  // filtering

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12 max-w-7xl mx-auto relative mt-4">
        <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
          <h2 className="text-2xl text-secondary text-center">
            Total Book : {data?.data?.length}
          </h2>
          <div className="text-center">
            <Link to="/add-new-book">
              <button className="btn btn-primary">Add New Book</button>
            </Link>
          </div>
          <div>
            <h1 className="text-xl text-orange-600 uppercase mb-1">
              Search Book
            </h1>
            <div className="form-control mb-2">
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-24 md:w-auto"
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
        <div className="col-span-9 grid grid-cols-2 gap-10 pb-20">
          {filteredData?.map((book: IBooks) => (
            <BookCard book={book} key={book.title} />
          ))}
        </div>
      </div>
      {/* <div className="text-center py-8">
        <h2 className="font-bold text-3xl">Our Books Catalog</h2>
        <div className="grid grid-cols-12 gap-4 py-8 px-8">
          {data?.data?.map((book: IBooks) => (
            <BookCard book={book} key={book.title} />
          ))}
        </div>
      </div> */}
    </div>
  );
}
