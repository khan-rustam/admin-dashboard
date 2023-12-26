import AdminSidebar from "../components/AdminSidebar";
import { ReactElement, useCallback, useState } from "react";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { FaTrash } from "react-icons/fa";

interface DataType {
  avatar: ReactElement;
  name: string;
  email: string;
  gender: string;
  role: string;
  action: ReactElement;
}
const columns: Column<DataType>[] = [
  {
    Header: "Avatar",
    accessor: "avatar",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Gender",
    accessor: "gender",
  },
  {
    Header: "Email",
    accessor: "email",
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const img = "https://randomuser.me/api/portraits/women/54.jpg";
const img2 = "https://randomuser.me/api/portraits/men/50.jpg";
const img3 = "https://randomuser.me/api/portraits/women/49.jpg";
const img4 = "https://randomuser.me/api/portraits/men/30.jpg";

const arr: DataType[] = [
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img} alt="Shoes" />,
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: <img style={{ borderRadius: "50%" }} src={img2} alt="Shoes" />,
    name: "Chicha",
    email: "aunt.may@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
  {
    avatar: <img style={{ borderRadius: "50%" }} src={img3} alt="Shoes" />,
    name: "Emily Palmer",
    email: "emily.palmer@example.com",
    gender: "female",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },

  {
    avatar: <img style={{ borderRadius: "50%" }} src={img4} alt="Shoes" />,
    name: "John",
    email: "aunt.may@example.com",
    gender: "male",
    role: "user",
    action: (
      <button>
        <FaTrash />
      </button>
    ),
  },
];

const customers = () => {
  const [data] = useState<DataType[]>(arr);

  const Table = useCallback(
    TableHOC<DataType>(
      columns,
      data,
      "dashboard-product-box",
      "Customers",
      true
    ),
    []
  );

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main>{Table()}</main>
    </div>
  );
};

export default customers;
