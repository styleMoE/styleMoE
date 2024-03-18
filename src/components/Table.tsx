
interface TableProps {
    data: object[]
}

export default function Table({ data }: TableProps) {
    const columns = Object.keys(data[0])
    const values = data.map((obj) => Object.values(obj))

    return (
        <div>
            <table className="min-w-full divide-y divide-gray-300">
                <thead>
                    <tr>
                        {columns.map((column, key) => (
                            <th key={key} scope="col" className={`px-3 py-3.5 text-left text-sm font-semibold text-gray-900 ${ " pl-4 pr-3" ? key == 0 : ""}`}>
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="bg-white">
                    {values.map((values, key) => (
                        <tr key={key} className="even:bg-gray-50">
                            {values.map((value, key) => (
                                <td key={key} className={`whitespace-nowrap px-3 py-4 text-sm text-gray-500 ${ "sm:pl-3" ? key == 0 : ""}`}>
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
