import AdminSidebar from "../../components/AdminSidebar";
import { LineChart } from "../../components/Charts";

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

const LineCharts = () => {
  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="chart-container">
        <h1>Line Charts</h1>
        <section>
          <LineChart
            data={[
              200, 100, 850, 666, 999, 756, 343, 1000, 985, 345, 1200, 447,
            ]}
            label="Users"
            backgroundColor="rgba(53, 162, 255, 0.5)"
            borderColor="rgb(53, 162, 255)"
            labels={months}
          />
          <h2>Active Users</h2>
        </section>
        <section>
          <LineChart
            data={[40, 60, 244, 100, 143, 120, 41, 47, 50, 56, 32]}
            backgroundColor={"hsla(269,80%,40%,0.4)"}
            borderColor={"hsl(269,80%,40%)"}
            label="Products"
            labels={months}
          />
          <h2>Total Products (SKU)</h2>
        </section>

        <section>
          <LineChart
            data={[
              24000, 14400, 24100, 34300, 90000, 20000, 25600, 44700, 99000,
              144400, 100000, 120000,
            ]}
            backgroundColor={"hsla(129,80%,40%,0.4)"}
            borderColor={"hsl(129,80%,40%)"}
            label="Revenue"
            labels={months}
          />
          <h2>Total Revenue</h2>
        </section>

        <section>
          <LineChart
            data={[
              9000, 12000, 12000, 9000, 1000, 5000, 4000, 1200, 1100, 1500,
              2000, 5000,
            ]}
            backgroundColor={"hsla(29,80%,40%,0.4)"}
            borderColor={"hsl(29,80%,40%)"}
            label="Discount"
            labels={months}
          />
          <h2>Discount Allotted</h2>
        </section>
      </main>
    </div>
  );
};

export default LineCharts;