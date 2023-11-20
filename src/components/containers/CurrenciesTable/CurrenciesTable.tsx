// CurrenciesTable.tsx
import React from "react";
import { useCurrencies } from "../../../hooks/useGetCurrencies/useGetCurrencies";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

const CurrenciesTable: React.FC = () => {
  const { data, isLoading, error } = useCurrencies();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <table className="min-w-full table-auto">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2">Currency</th>
          <th className="px-4 py-2">Code</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          Object.entries(data).map(([code, name]) => (
            <tr key={code} className="bg-white border-b">
              <td className="px-4 py-2">{name}</td>
              <td className="px-4 py-2">{code}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export function Component(): JSX.Element {
  return (
    <ProtectedRoute>
      <CurrenciesTable />
    </ProtectedRoute>
  );
}
