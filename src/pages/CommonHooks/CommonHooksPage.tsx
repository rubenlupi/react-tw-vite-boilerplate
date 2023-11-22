import { MainPageLayout } from "@/components/MainPageLayout/MainPageLayout";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card/card";
import { Link } from "react-router-dom";

export function CardUseStateInUrl() {
  return (
    <Card className="w-[350px] bg-gray-200">
      <CardHeader>
        <CardTitle className="uppercase text-center text-md">
          Use State in Url
        </CardTitle>
        <CardDescription>
          And example about how to use the state in url.
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

const CommonHooksPage = () => {
  return (
    <MainPageLayout>
      <div className="flex flex-wrap gap-2 m-2 justify-center items-center">
        {[...Array(150).keys()].map((item, index) => (
          <Link key={index} to="/common-hooks/use-state-in-url">
            <CardUseStateInUrl />
          </Link>
        ))}
      </div>
    </MainPageLayout>
  );
};

export function Component(): JSX.Element {
  return <CommonHooksPage />;
}
