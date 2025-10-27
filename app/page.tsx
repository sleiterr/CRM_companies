import AddCompanyButton from "../components/add-company-button";
// import MagicButton from "@/components/magic-button";
import DashboardLink from "../components/dashboardLink";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex items-center justify-center">
        <div className="py-[8rem] mx-auto md:max-w-7xl">
          <h1 className="text-center text-3xl mb-8">Home Page</h1>
          <div className="flex justify-between gap-8">
            <AddCompanyButton />
            <DashboardLink />
          </div>

          {/* <MagicButton/> */}
        </div>
      </section>
    </main>
  );
}
