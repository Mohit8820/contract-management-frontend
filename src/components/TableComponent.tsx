import React from "react";

const TableComponent = ({
  heading,
  children,
}: {
  heading: string[];
  children: React.ReactNode;
}) => {
  return (
    <div className="table-container">
      <table id="table">
        <thead>
          <tr>
            {heading.map((head) => (
              <th>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableComponent;
