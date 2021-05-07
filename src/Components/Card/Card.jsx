import React from "react";
import { Link } from "react-router-dom";

const Card = ({ listtodos }) => {
  return (
    <div>
      {/* {console.log(listtodos)} */}
      {listtodos.map((data) => {
        return (
          <ul key={data.id}>
            <li>
              <Link to={`/api/${data.id}`}>{data.content}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default Card;
