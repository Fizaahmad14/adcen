"use client";
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";

export function Trends() {
  return (
    <div className="grid gap-12 lg:gap-24 px-4 py-12 lg:px-6 lg:py-16">
      <div className="flex flex-col items-center justify-center space-y-4 lg:space-y-8">
        <div className="flex flex-col items-center justify-center space-y-2 lg:space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[6rem]">
            2024 Job Market Trends
          </h1>
          <p className="text-gray-500 lg:text-xl/relaxed xl:text-2xl/relaxed dark:text-gray-400">
            Gain insights into salaries and demand across various
            industries and professions.
          </p>
        </div>
        <img
          alt="Cover"
          className="aspect-video overflow-hidden rounded-lg object-cover object-center"
          height="480"
          src="/placeholder.svg"
          width="960"
        />
      </div>
      <div className="grid items-start gap-4 md:grid-cols-2 lg:gap-8">
        <div className="flex flex-col items-start justify-start space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Emerging Job Sectors
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The top 5 sectors with the highest projected growth in
              the job market.
            </p>
          </div>
          <div className="grid gap-4">
            <Card>
              <CardHeader className="flex gap-4">
                <div className="flex flex-col">
                  <CardDescription className="text-sm font-semibold">
                    Sector
                  </CardDescription>
                  <CardTitle>Healthcare</CardTitle>
                </div>
                <div>
                  <img
                    alt="Healthcare"
                    className="aspect-[2/1] object-cover rounded-md overflow-hidden"
                    height="60"
                    src="/placeholder.svg"
                    width="120"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal">
                  The healthcare sector is expected to see significant
                  growth due to an aging population and increased
                  demand for medical services.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex gap-4">
                <div className="flex flex-col">
                  <CardDescription className="text-sm font-semibold">
                    Sector
                  </CardDescription>
                  <CardTitle>Technology</CardTitle>
                </div>
                <div>
                  <img
                    alt="Technology"
                    className="aspect-[2/1] object-cover rounded-md overflow-hidden"
                    height="60"
                    src="/placeholder.svg"
                    width="120"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal">
                  Rapid advancements in technology are driving demand
                  for skilled IT professionals across all industries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex gap-4">
                <div className="flex flex-col">
                  <CardDescription className="text-sm font-semibold">
                    Sector
                  </CardDescription>
                  <CardTitle>Renewable Energy</CardTitle>
                </div>
                <div>
                  <img
                    alt="Renewable Energy"
                    className="aspect-[2/1] object-cover rounded-md overflow-hidden"
                    height="60"
                    src="/placeholder.svg"
                    width="120"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal">
                  With a focus on sustainability, the renewable energy
                  sector is creating new job opportunities in areas
                  such as solar and wind power.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Salary Projections
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The median salary range for key job roles in 2024.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width="48"
                  />
                </div>
                <div className="flex flex-col">
                  <CardDescription>Job Role</CardDescription>
                  <CardTitle>Software Engineer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width="48"
                  />
                </div>
                <div className="flex flex-col">
                  <CardDescription>Job Role</CardDescription>
                  <CardTitle>Marketing Manager</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width="48"
                  />
                </div>
                <div className="flex flex-col">
                  <CardDescription>Job Role</CardDescription>
                  <CardTitle>Financial Analyst</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width="48"
                  />
                </div>
                <div className="flex flex-col">
                  <CardDescription>Job Role</CardDescription>
                  <CardTitle>UX/UI Designer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CurvedlineChart className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurvedlineChart(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
