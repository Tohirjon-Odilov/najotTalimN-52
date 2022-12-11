import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Error() {
  const { url } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    !url && navigate("/apple");
  }, [url, navigate]);

  return (
    <div>
      Page not found:
      <h1>404</h1>
    </div>
  );
}

export default Error;
