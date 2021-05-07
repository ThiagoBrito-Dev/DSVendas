import axios from "axios";
import { useEffect, useState } from "react";
import { SalePage } from "types/sale";
import { formatLocalDate } from "utils/format";
import { BASE_URL } from "utils/requests";

export default function DataTable() {
  const [tableData, setTableData] = useState<SalePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales?page=0&size=20&sort=date,desc`).then(response => {
      setTableData(response.data)
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {tableData.content?.map(data => (
            <tr key={data.id}>
              <td>{formatLocalDate(data.date, "dd/MM/yyyy")}</td>
              <td>{data.seller.name}</td>
              <td>{data.visited}</td>
              <td>{data.deals}</td>
              <td>{data.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
