import styled from "@emotion/styled";
import { flexRender, getCoreRowModel, TableOptions, useReactTable } from "@tanstack/react-table";

import { Loading } from "@/ui/Loading";
import { TableProps, TableRow } from "@/ui/Table/types.ts";
import { Text } from "@/ui/Text";

const Root = styled.div<{ hovered?: boolean; fitContent?: boolean }>`
  width: ${({ fitContent }) => (fitContent ? "fit-content" : "100%")};
  border-radius: 16px;
  background: ${({ theme }) => `${theme.colors.white}`};

  table {
    width: 100%;
    border-spacing: 0;

    tr {
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      color: ${({ theme }) => `${theme.colors.primary650}`};
      width: 100%;
      transition: 0.4s;

      :hover {
        ${({ hovered }) => hovered && "cursor: pointer;"};
        ${({ hovered, theme }) => hovered && `background: ${theme.colors.primary50};`};
      }

      :last-child {
        td {
        }
      }
    }

    thead {
      position: sticky;
      top: 0;
    }

    th {
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      text-align: left;
      padding: 14px;
      border-bottom: 1px solid ${({ theme }) => `${theme.colors.primary100}`};
      background: ${({ theme }) => `${theme.colors.white}`};
      cursor: default;
    }

    td {
      font-weight: 400;
      font-size: 16px;
      line-height: 20px;
      color: ${({ theme }) => `${theme.colors.primary800}`};
      padding: 16px;
      border-bottom: 1px solid ${({ theme }) => `${theme.colors.primary100}`};

      :last-child {
        border-right: 0;
      }
    }
  }
`;

const Table = <T extends TableRow>({
  columns,
  data,
  fitContent,
  onLoadMore,
  withHover,
  loading,
  onClick,
  ...rest
}: TableProps<T>) => {
  const tableOptions: TableOptions<T> = {
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
  };

  const { getHeaderGroups, getRowModel } = useReactTable<T>(tableOptions);

  return (
    <Root {...rest} hovered={withHover} fitContent={fitContent}>
      <table>
        <thead>
          {getHeaderGroups().map((headerGroup, index) => (
            <tr key={index + "tr-header"}>
              {headerGroup.headers.map((header, index) => (
                <th key={index + "th"}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {getRowModel().rows.map((row, i) => (
            <tr
              style={{
                opacity: row.original.disabled ? 0.5 : 1,
                cursor: row.original.disabled ? "not-allowed" : "pointer",
              }}
              key={i + "tr"}
              onClick={() => !row.original.disabled && onClick && onClick(row.original)}
            >
              {row.getVisibleCells().map((cell, index) => (
                <td key={index + "td"}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {onLoadMore != null && (
        <Text
          type="secondary"
          weight={500}
          textAlign="center"
          style={{ cursor: "pointer", padding: "16px 0" }}
          onClick={onLoadMore}
        >
          {loading ? <Loading big /> : "Load more"}
        </Text>
      )}
    </Root>
  );
};

export default Table;
