import Header from "./components/Header";
import StatusCards from "./components/StatusCards";
import VoteChart from "./components/VoteChart";
import TokenChart from "./components/TokenChart";

export default function Home() {
  return (
    <div className="min-h-screen px-4 py-8 bg-gradient-radial from-blueshift-cyan/[0.02] to-blueshift-dark">
      <Header />
      
      <div className="max-w-7xl mx-auto mb-6">
        <StatusCards />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        <VoteChart />
        <TokenChart />
      </div>
    </div>
  );
}
