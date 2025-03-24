import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the home page after a short delay
    const redirectTimer = setTimeout(() => {
      navigate("/");
    }, 100); // Very short delay to allow for any cleanup

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  // This component won't render anything visible as it redirects quickly
  return null;
};

export default NotFound;
