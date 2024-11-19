// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const Search = () => {
  const params = useParams();
  return (
    <div className="text-6xl text-wrap flex flex-wrap">
      This is Search Page : {JSON.stringify(params)} 
    </div>
  );
  //   return <div>
  //     <div className="w-[240px] bg-white">side content</div>
  //     <div className="flex flex-col ">{
  //     resultProducts.map(item => <SearchedProduct data={item} />)}</div>
  //   </div>;
};
export default Search;

