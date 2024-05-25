/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

type TableProps = {
  className?: string;
  children: React.ReactNode;
};

const Table: React.FC<TableProps> = ({ children, className }) => {
  return <table className={className}>{children}</table>;
};

type TableHeadProps = {
  children: React.ReactNode;
};

const TableHead: React.FC<TableHeadProps> = ({ children }) => {
  return (
    <thead style={{ position: 'relative', zIndex: 100 }}>
      {children}
    </thead>
  );
};

type TableRowProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
};

const TableRow: React.FC<TableRowProps> = ({
  className,
  children,
  ...rest
}) => {
  return (
    <tr className={className} {...rest}>
      {children as React.ReactNode}
    </tr>
  );
};

type TableHeaderCellProps = {
  onClick: () => void;
  children: React.ReactNode;
};

const TableHeaderCell = ({
  onClick,
  children
}: TableHeaderCellProps) => {
  return <th onClick={onClick}>{children}</th>;
};

type TableBodyProps = {
  children: React.ReactNode;
};

const TableBody: React.FC<TableBodyProps> = ({ children }) => {
  return <tbody>{children}</tbody>;
};

type TableRowCellProps = {
  children: React.ReactNode;
};

const TableRowCell: React.FC<TableRowCellProps> = ({ children }) => {
  return <td title={children?.toString()}>{children}</td>;
};

export {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableRowCell
};
