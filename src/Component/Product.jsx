import React from "react";
function Product(props) {
    return (
    <div className="w-[240px] h-auto  rounded-lg flex-shrink-0 cursor-pointer" >
      <div className="bg-transparent w-full h-[150px] ">
        <img  className="h-full rounded-t-lg object-cover "
          src={props.img}
          alt=""
        />
      </div>
      <div className="flex flex-col text-black py-2">
        <h1 className="text-[12px] lg:text-md font-bold">
          {props.title}
        </h1>
        <p className="text-[10px]">{props.p_name}</p>
        <p className="text-[10px]">{props.price}</p>
      </div>
    </div>
  );
}

export default Product;
