import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";

const Toss = () => {
  const [angle, setAngle] = useState<number>(0);

  function flipCoin() {
    if (Math.random() > 0.5) setAngle((prev) => prev + 180);
    else setAngle((prev) => prev + 360);
  }

  return (
    <div className="adminContainer">
      <AdminSidebar />
      <main className="dashboard-app-container">
        <h1>Toss</h1>
        <section>
          <article
            style={{ transform: `rotateY(${angle}deg)` }}
            onClick={flipCoin}
            className="toss-coin"
          >
            <div></div>
            <div></div>
          </article>
        </section>
      </main>
    </div>
  );
};

export default Toss;
