import React from "react";

function UseEffectUser({ data }) {
  return (
    <div>
      <ul className="row" style={{ zIndex: -1 }}>
        {data.map((i) => (
          <li key={i.id} className="col-lg-3 col-md-4 col-sm-5">
            <div className="card" style={{ width: "100%" }}>
              <img src={i.avatar} className="card-img-top" alt={i.first_name} />
              <div className="card-body">
                <h5 className="card-title">
                  {i.first_name} {i.last_name}
                </h5>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UseEffectUser;
