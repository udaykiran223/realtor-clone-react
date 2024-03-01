import React from "react";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";

export default function ListingItem(listing, id) {
  return (
    <li className="m-[10px] relative bg-white flex flex-col justify-between items-center shadow-md hover:shadow-xl rounded-md overflow-hidden transition-shadow duration-150">
      <Link
        className="contents"
        to={`/category/${listing.listing.type}/${listing.id}`}
      >
        <img
          className="h-[170px] w-full object-cover hover:scale-105 transition-scale duration-200 ease-in"
          loading="lazy"
          src={listing.listing.imgUrls[0]}
        />
        <Moment
          className="absolute top-2 left-2 bg-[#3377cc] text-white uppercase text-xs font-semibold rounded-md px-2 py-1 shadow-lg "
          fromNow
        >
          {listing.listing.timestamp?.toDate()}
        </Moment>
        <div className="w-full p-[10px] ">
          <div className="flex  items-center space-x-1">
            <MdLocationOn className="h-4 w-4 text-green-600 " />
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate ">
              {listing.listing.address}
            </p>
          </div>
          <p className="font-semibold m-0 text-xl truncate ">
            {listing.listing.name}
          </p>
          <p className="text-[#457b9d] mt-2 font-semibold ">
            $
            {listing.listing.offer
              ? listing.listing.discountedPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
              : listing.listing.regularPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            {listing.listing.type === "rent" && " / month"}
          </p>
          <div className="flex  items-center mt-[10px] space-x-3 ">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.listing.bedrooms > 1
                  ? `${listing.listing.bedrooms} Beds`
                  : "1 Bed"}
              </p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">
                {listing.listing.bathrooms > 1
                  ? `${listing.listing.bathrooms} Baths`
                  : "1 Bath"}{" "}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
