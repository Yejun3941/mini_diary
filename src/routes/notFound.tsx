import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../theme/daisyui";

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-center text-center">
        <p className="text-purple-400 text-6xl w-1/3 min-w-48 justify-center text-center grid-cols-none">
          404
        </p>
      </div>
      <p className="justify-center text-center text-2xl text-purple-400">
        This page Not Found
      </p>
      <div className="flex justify-center items-center mt-4">
        <Button className="ml-4 btn-primary btn-xs" onClick={goBack}>
          go Back
        </Button>
      </div>
    </div>
  );
}
