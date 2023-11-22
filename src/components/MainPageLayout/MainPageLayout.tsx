import PageLayout from "@/components/PageLayout/PageLayout";
import { Link } from "react-router-dom";

export function MainPageLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <div className="p-4 flex justify-between">
      <h1 className="text-black text-lg text-center uppercase mx-auto my-auto">
        Common Hooks
      </h1>
      <Link
        className="rounded text-black bg-gray-300 p-2 w-auto text-center text-sm uppercase"
        to="../home"
      >
        Go back home
      </Link>
    </div>
  );

  const footer = (
    <div className="flex flex-wrap gap-2 m-2 justify-center items-center">
      <p className="uppercase text-sm ">Boiler Plate App</p>
      <p className="uppercase text-sm ">{new Date().toLocaleDateString()}</p>
    </div>
  );

  return <PageLayout header={header} content={children} footer={footer} />;
}
