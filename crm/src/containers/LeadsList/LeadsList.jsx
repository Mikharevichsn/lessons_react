import { useSelector } from 'react-redux';
// import { Table } from 'antd';
import { getLeads } from '../../redux/selectors';
import 'antd/dist/antd.css';
import './LeadsList.scss';

export const LeadsList = () => {
  const leads = useSelector(getLeads);

  // const columns = [
  //   {
  //     title: 'Name',
  //     dataIndex: 'name',
  //   },
  //   {
  //     title: 'Товары',
  //     dataIndex: 'goods',
  //   },
  //   {
  //     title: 'Сумма по заявке',
  //     dataIndex: 'cost',
  //     sorter: (a, b) => Number(a.cost) - Number(b.cost),
  //   },
  // ];

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>№</th>
            <th>Название</th>
            <th>Товары</th>
            <th>Сумма по заявке</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={lead.id}>
              <td>{index + 1}</td>
              <td>{lead.name}</td>
              <td>{lead.goods}</td>
              <td>{lead.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      {/* <Table
        rowKey={(record) => record.id}
        columns={columns}
        dataSource={leads}
      /> */}
    </div>
  );
};
