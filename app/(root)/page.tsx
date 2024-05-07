import HeaderBox from "@/components/headerBox";
import RightSidebar from "@/components/rightSidebar";
import TotalBalanceBox from "@/components/totalBalanceBox";
import React from "react";

export default function Page() {
  const loggedIn = {
    firstName: "SHAHRIAR",
    lastName: "YouthSoft",
    email: "community@youthsoft.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transaction efficiently"
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={7576.78}
          />
        </header>
        RECENT TRANSACTION
      </div>
      <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:257.84}, {currentBalance:756.957}]} />
    </section>
  );
}
