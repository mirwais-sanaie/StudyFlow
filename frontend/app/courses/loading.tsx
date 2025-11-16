import { Spinner } from "@/components/ui/spinner";

function loading() {
  return (
    <div className="grid items-center justify-center mt-20">
      <Spinner />
    </div>
  );
}

export default loading;
