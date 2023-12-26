import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";
import Table from "../components/DashboardTable";

const dashboard = () => {
  const userImg =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS10PKiP_JgIwAEgEN0iQjXUcx0HfCFmuB-rRDZQkj-0GxtZgb7hZmX9Ks4HEAAgY0832w&usqp=CAU";

  return (
    <div className="adminContainer">
      <AdminSidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for Data,User and Doc's" />
          <FaRegBell />
          <img src={userImg} alt="User Profile Img" />
        </div>

        <section className="WidgetContainer">
          <WidgetItem
            percentage={40}
            amount={true}
            value={34000}
            heading="Revenue"
            color="rgba(0,115,255)"
          />
          <WidgetItem
            percentage={-40}
            value={400}
            heading="Users"
            color="rgba(0,198,202)"
          />
          <WidgetItem
            percentage={80}
            value={23000}
            heading="Transactions"
            color="rgba(255 196 0)"
          />
          <WidgetItem
            percentage={30}
            value={1000}
            heading="Products"
            color="rgba(75 0 255)"
          />
        </section>

        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transactions</h2>
            <BarChart
              data_1={[300, 144, 566, 877, 236, 755, 190]}
              data_2={[200, 174, 196, 107, 896, 115, 110]}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,235,0.5)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((i) => (
                <CategoryItem
                  key={i.heading}
                  heading={i.heading}
                  value={i.value}
                  color={`hsl(${i.value * 8},${i.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="transaction-container">
          <div className="gender-chart">
            <h2>Gender Ratio</h2>
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 29]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.5)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          <Table data={data.transaction} />
        </section>
      </main>
    </div>
  );
};

interface WidgetItemProps {
  heading: string;
  value: number;
  color: string;
  percentage: number;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percentage,
  color,
  amount = false,
}: WidgetItemProps) => (
  <article className="widget">
    <div className="widgetInfo">
      <pre>{heading}</pre>
      <h4>{amount ? `$${value}` : value}</h4>
      {percentage > 0 ? (
        <span className="green">
          <HiTrendingUp /> +{percentage}%{""}
        </span>
      ) : (
        <span className="red">
          <HiTrendingDown /> {percentage}%{""}
        </span>
      )}
    </div>
    <div
      className="widgetCircle"
      style={{
        background: `conic-gradient(${color} ${
          (Math.abs(percentage) / 100) * 360
        }deg, rgba(255,255,255) 0 )`,
      }}
    >
      <span style={{ color }}>{percentage}%</span>
    </div>
  </article>
);

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({ color, value, heading }: CategoryItemProps) => (
  <div className="categoryItem">
    <h5>{heading}</h5>
    <div>
      <div style={{ backgroundColor: color, width: `${value}%` }}></div>
    </div>
    <span>{value}%</span>
  </div>
);

export default dashboard;
