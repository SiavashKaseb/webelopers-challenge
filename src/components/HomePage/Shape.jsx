import React, { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";

const Shape = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);
  return (
    <>
      {isLoading ? (
        ""
      ) : (
        <Spline scene="https://prod.spline.design/7Mq6h97NiBiRF5fY/scene.splinecode" />
        )}
    </>
  );
};

export default Shape;
