import { ReportCard } from "@/components/report-card";
import { SectionHeading } from "@/components/section-heading";
import { getAllReports } from "@/lib/content";

export const metadata = {
  title: "Reports",
};

export default async function ReportsPage() {
  const reports = await getAllReports();

  return (
    <div className="dashboard-canvas pb-20 md:pb-8">
      <section className="shell-panel border-x-0 border-t-0 px-8 py-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Reports"
            title="Historical research reports"
            description="These dated reports are archived research. Their claims and historical scores have not been independently verified and do not describe the current forecast."
          />
        </div>
      </section>
      <section className="mx-auto max-w-7xl p-8">
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {reports.map((report) => (
            <ReportCard key={report.slug} report={report} />
          ))}
        </div>
      </section>
    </div>
  );
}
