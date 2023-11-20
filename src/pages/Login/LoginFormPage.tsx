"use client";

import { ReactNode } from "react";
import LoginForm from "../../components/containers/LoginForm/LoginForm";

function CenterMiddleScreen({
  childTitle,
  childComponent,
}: {
  childTitle: string;
  childComponent: ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="bg-cover bg-center bg-fixed">
        <div className="h-screen flex justify-center items-center">
          <div className="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 className="text-3xl font-bold mb-8 text-center">
              {childTitle}
            </h1>
            {childComponent}
          </div>
        </div>
      </div>
    </>
  );
}

export function Component() {
  return (
    <CenterMiddleScreen
      childTitle={`${import.meta.env.VITE_APP_LOGIN_TITLE} (${
        import.meta.env.DEV ? "Development" : "Production"
      })`}
      childComponent={<LoginForm />}
    ></CenterMiddleScreen>
  );
}
