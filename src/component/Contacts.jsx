const Contacts = () => {
  return (
    <div className="text-center h-full rounded-xl ">
      <div className="flex flex-col">
        <div className="overflow-x-auto ">
          <div className=" inline-block min-w-full ">
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-gray-400 border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-6 py-4 text-center"
                    >
                      Username
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-6 py-4 text-center"
                    >
                      Phone Number
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-6 py-4 text-center"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-6 py-4 text-center"
                    >
                      Delete
                    </th>
                    <th
                      scope="col"
                      className="text-lg font-bold text-gray-900 px-6 py-4 text-center"
                    >
                      Edit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
                    <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900">
                      {/*{name}*/}
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {/*{phone}*/}
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {/*{gender}*/}
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      <lord-icon
                        src="https://cdn.lordicon.com/qjwkduhc.json"
                        trigger="morph"
                        colors="primary:#646e78,secondary:#c71f16,tertiary:#ebe6ef"
                        state="morph-trash-in"
                        style={{ width: 40, height: 40 }}
                        role="button"
                      />
                    </td>
                    <td className="text-base text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <lord-icon
                        src="https://cdn.lordicon.com/rfbqeber.json"
                        trigger="hover"
                        style={{ width: 40, height: 40 }}
                        role="button"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
