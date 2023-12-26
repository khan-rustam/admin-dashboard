import AdminSidebar from "../../components/AdminSidebar";
import { BarChart } from "../../components/Charts";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const BarCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Bar Charts</h1>
        <section>
          <BarChart
            data_1={[200, 100, 850, 666, 999, 756, 343]}
            data_2={[850, 400, 200, 226, 129, 345, 983]}
            title_1="Products"
            title_2="Users"
            bgColor_1={`hsl(260, 50%,30%)`}
            bgColor_2={`hsl(360, 90%,90%)`}
          />
          <h2>TOP SELLING PRODUCTS & TOP CUSTOMERS</h2>
        </section>
        <section>
          <BarChart
            horizontal={true}
            data_1={[
              200, 100, 850, 666, 956, 923, 1453, 123, 544, 999, 756, 343,
            ]}
            data_2={[]}
            title_1="Products"
            title_2=""
            bgColor_1={`hsl(180, 40%,50%)`}
            bgColor_2=""
            labels={months}
          />
          <h2>Orders throughout the year</h2>
        </section>
      </main>
    </div>
  );
};

export default BarCharts;
