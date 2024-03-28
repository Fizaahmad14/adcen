"use client";
import {
  CardDescription,
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../ui/card";
import { ResponsiveLine } from "@nivo/line";

export default function Trends() {
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
          src="/trend.jpg"
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
                  <CardTitle>Finance</CardTitle>
                </div>
                <div>
                  <img
                    alt="Finance"
                    className="aspect-[2/1] object-cover rounded-md overflow-hidden"
                    height="60"
                    src="/finance.jpg"
                    width="120"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal">
                  The finance sector is poised for substantial growth,
                  increasing demand for financial products and services, 
                  and advancing technological innovations.
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
                    src="/technology.jpg"
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
                  <CardTitle>Engineering</CardTitle>
                </div>
                <div>
                  <img
                    alt="Engineering"
                    className="aspect-[2/1] object-cover rounded-md overflow-hidden"
                    height="60"
                    src="/engineering.jpg"
                    width="120"
                  />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-normal">
                The engineering sector is projected to witness 
                substantial advancement, propelled by emerging 
                technologies, infrastructure development initiatives, 
                and the global demand for innovative solutions across various industries.
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
              The median salary range for key job roles till 2025 (expected).
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
                    src="/softdev.jpg"
                    style={{
                      aspectRatio: "48/48",
                      objectFit: "cover",
                    }}
                    width="48"
                  />
                </div>
                <div className="flex flex-col">
                  <CardDescription>Job Role</CardDescription>
                  <CardTitle>Machine Learning Engineer</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CurvedlineChart1 className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/marketing.jpg"
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
                <CurvedlineChart2 className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/finAnalyst.jpg"
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
                <CurvedlineChart3 className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex items-start gap-4">
                <div>
                  <img
                    alt="Avatar"
                    className="rounded-full"
                    height="48"
                    src="/uiux.jpg"
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
                <CurvedlineChart4 className="w-full aspect-[2/1]" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CurvedlineChart1(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "2020", y: 93 },
              { x: "2021", y: 107 },
              { x: "2022", y: 94 },
              { x: "2023", y: 145 },
              { x: "2024", y: 150 },
              { x: "2025", y: 210 },
            ],
          },
        ]}
        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="natural"
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
        colors={["#2563eb"]} // Only blue color for the line
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

function CurvedlineChart2(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "2020", y: 100 },
              { x: "2021", y: 127 },
              { x: "2022", y: 161 },
              { x: "2023", y: 145 },
              { x: "2024", y: 120 },
              { x: "2025", y: 150 },
            ],
          },
        ]}
        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="natural"
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
        colors={["#2563eb"]} // Only blue color for the line
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

function CurvedlineChart3(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "2020", y: 92 },
              { x: "2021", y: 147 },
              { x: "2022", y: 111 },
              { x: "2023", y: 145 },
              { x: "2024", y: 136 },
              { x: "2025", y: 160 },
            ],
          },
        ]}
        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="natural"
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
        colors={["#2563eb"]} // Only blue color for the line
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

function CurvedlineChart4(props) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "2020", y: 93 },
              { x: "2021", y: 137 },
              { x: "2022", y: 161 },
              { x: "2023", y: 145 },
              { x: "2024", y: 180 },
              { x: "2025", y: 200 },
            ],
          },
        ]}
        margin={{ top: 20, right: 20, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="natural"
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
        colors={["#2563eb"]} // Only blue color for the line
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