import React from 'react';
interface TableData {
  id: number;
  name: string;
  image: string;
  qty?: string;
  price?: number;
  action?: string;
  gender?: string;
  email?: string;
  role?: string;
}
interface TableProps {
  headings: string[];
  TableData: TableData[];
  tableType: 'products' | 'customers';
}

const Tablecomponent: React.FC<TableProps> = ({ headings, TableData, tableType }) => {
  return (
    <div className="relative shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headings.map((heading, index) => (
              <th key={index} scope="col" className="px-6 py-6">
                {heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody> 
          {TableData.map((data) => (
            <tr
              key={data.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              {data.image && (
                <td className="p-3">
                  <img
                    src={data.image}
                    className={`${
                      tableType === 'products'
                        ? 'w-24 md:w-28 h-20 max-w-full max-h-full ml-2'  // Square for product
                        : 'w-14 h-[3.6rem] rounded-full ml-2'  // Circle for customer
                    }`}
                    alt={data.name}
                  />
                </td>
              )}
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                {data.name}
              </td>

              {data.qty && (
                <td className="px-6 py-4">
                  <span className="text-gray-900 dark:text-white font-semibold">{data.qty}</span>
                </td>
              )}

              {data.price && (
                <td className="px-6 py-4 font-semibold  text-gray-900 dark:text-white">
                  ${data.price}
                </td>
              )}


              {data.gender && (
                <td className="px-6 py-4 font-semibold  text-gray-900 dark:text-white">
                  {data.gender}
                </td>
              )}
              {data.role && (
                <td className="px-6 py-4 font-semibold  text-gray-900 dark:text-white">
                  {data.role}
                </td>
              )}
              {data.email && (
                <td className="px-6 py-4 font-semibold  text-gray-900 dark:text-white">
                  {data.email}
                </td>
              )}

              {data.action && (
                <td className="px-6 py-4">
                  <a
                    href="#"
                    className={`font-medium rounded-xl p-2 py-1 ${data.action === "Remove"
                        ? "text-red-600 hover:text-red-700 bg-red-300 hover:bg-red-400"
                        : "text-blue-600 hover:text-blue-700 bg-blue-300 hover:bg-blue-400"
                      }`}
                  >
                    {data.action}
                  </a>
                </td>
              )}

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default Tablecomponent;
