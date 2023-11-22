import { MainPageLayout } from "@/components/MainPageLayout/MainPageLayout";
import { Link, useSearchParams } from "react-router-dom";

const images = [
  "https://images.unsplash.com/photo-1597733336794-12d05021d510?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1544380904-c686aad2fc40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG5ldHdvcmt8ZW58MHx8MHx8fDI%3D",
  "https://images.unsplash.com/photo-1497211419994-14ae40a3c7a3?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const UseStateInUrlPage = () => {
  const [searchParams] = useSearchParams();
  const paramValue = searchParams.get("image") || "0";

  return (
    <MainPageLayout>
      <div className="flex justify-between w-3/6 mx-auto  my-auto">
        <div className="justify-content w-1/2">
          <img src={images[parseInt(paramValue)]} />
        </div>
        <div className="mx-auto my-auto ">
          <div className="mb-12">
            <div>Press the image button</div>
          </div>
          <div className="flex flex-wrap gap-2">
            {images.map((_image, index) => {
              return (
                <Link
                  key={index}
                  className="bg-gray-200 rounded p-2 text-sm"
                  to={`?image=${index}`}
                >
                  Image Title
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </MainPageLayout>
  );
};

export function Component(): JSX.Element {
  return <UseStateInUrlPage />;
}
