const TableHeaders = ({ headerOptions }) => {
  return (
    <tr>
      {headerOptions.map((header, i) => (
        <th
          key={i}
          style={{
            textAlign: `${i === headerOptions.length - 1 ? "center" : ""}`,
          }}
        >
          {header}
        </th>
      ))}
    </tr>
  );
};

export default TableHeaders;
