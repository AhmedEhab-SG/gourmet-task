import { forwardRef, useEffect, useState } from "react";
import SectionContainer from "../shared/SectionContainer";
import SectionHeader from "../shared/SectionHeader";
import en from "../../locale/en.json";
import styles from "./table.module.css";
import { getAllProducts } from "../../api/utils/products";
import toast from "react-hot-toast";
import TableRow from "./TableRow";
import ButtonStyled from "../shared/ButtonStyled";
import { appRoutes } from "../../config/routes";
import TableHeaders from "./TableHeaders";
import FilterNav from "./FilterNav";

const { title, fetching } = en.pages.home;
const { tableHeaders, addBtn } = en.pages.home.table;

const headerOptions = Object.values(tableHeaders);

const Table = forwardRef((_props, ref) => {
  const [tableData, setTableData] = useState();
  const [originalData, setOriginalData] = useState([]);
  const [filterSettings, setFilterSettings] = useState({
    date: "",
    category: "",
  });

  const filterData = (data, filters) =>
    data.filter((item) => {
      const dateMatch = filters.date ? item.relase_date === filters.date : true;

      const categoryMatch = filters.category
        ? item.category.toLowerCase() === filters.category.toLowerCase()
        : true;
      return dateMatch && categoryMatch;
    });

  // get all products
  useEffect(() => {
    const getTableDate = async () => {
      try {
        const res = await getAllProducts();

        const resData = res.data.map(
          ({ created_at, updated_at, ...rest }) => rest
        );
        setTableData(resData);
        setOriginalData(resData);
      } catch (e) {
        toast.error("Failed to fetch data");
      }
    };

    getTableDate();
  }, []);

  useEffect(() => {
    const filteredData = filterData(originalData, filterSettings);
    setTableData(filteredData);
  }, [filterSettings, originalData]);

  return (
    <SectionContainer>
      <SectionHeader title={title} />

      <FilterNav setFilterSettings={setFilterSettings} />

      <table ref={ref} cellPadding={15} className={styles.table}>
        <thead>
          <TableHeaders
            headerOptions={headerOptions}
            tableData={tableData}
            setTableData={setTableData}
          />
        </thead>
        <tbody>
          {tableData ? (
            tableData.length > 1 ? (
              tableData?.map((product, i) => <TableRow key={i} {...product} />)
            ) : (
              <tr>
                <td colSpan={headerOptions.length} className={styles.loading}>
                  No data found
                </td>
              </tr>
            )
          ) : (
            <tr>
              <td colSpan={headerOptions.length} className={styles.loading}>
                {fetching}
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <ButtonStyled
        title={addBtn}
        className={styles.addBtn}
        success
        size="md"
        href={appRoutes.addProduct}
      />
    </SectionContainer>
  );
});

export default Table;

// no time to implement pagination
