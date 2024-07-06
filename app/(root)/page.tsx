import Headerbox from "@/components/Headerbox";
import RightSidebar from "@/components/RightSiderBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

const Home = async ({ searchParams: { id, page } }: SearchParamProps) => {
  const loggedIn = {
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <Headerbox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={2}
            totalCurrentBalance={1000}
          />
        </header>
        Recent transaction
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 1000 }, { currentBalance: 2000 }]}
      />
    </section>
  );
};

export default Home;
