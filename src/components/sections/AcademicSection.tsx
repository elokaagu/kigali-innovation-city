import { GraduationCap, BookOpen, Brain, Globe2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/common/SectionHeader";

const institutions = [
  {
    abbr: "ALU",
    name: "African Leadership University",
    programs: [
      "BSc Software Engineering",
      "BSc Entrepreneurial Leadership",
      "BSc International Business & Trade",
      "BSc Computer Science",
    ],
    stats: [
      { value: "4,000", label: "Students Enrolled" },
      { value: "1,700", label: "Alumni" },
      { value: "52,000", label: "Jobs Created" },
      { value: "59", label: "Nationalities" },
    ],
    status: "Operational",
  },
  {
    abbr: "CMU",
    name: "Carnegie Mellon University Africa",
    programs: [
      "MS Information Technology (MSIT)",
      "MS Electrical & Computer Engineering",
      "MS Engineering Artificial Intelligence",
    ],
    stats: [
      { value: "3", label: "Master's Programs" },
      { value: "AI", label: "Focus Area" },
      { value: "STEM", label: "Excellence" },
    ],
    status: "Operational",
  },
  {
    abbr: "AIMS",
    name: "African Institute for Mathematical Sciences",
    programs: [
      "Master's in Mathematical Sciences",
      "African Master's in Machine Intelligence",
    ],
    stats: [
      { value: "Pan-African", label: "Network" },
      { value: "STEM", label: "Focus" },
    ],
    status: "Under Development",
  },
  {
    abbr: "UoR",
    name: "University of Rwanda – Biomedical Engineering",
    programs: [
      "MS Biomedical Engineering & Health Informatics",
      "Health Technology Management (HTM)",
      "Medical Coding & EMR",
      "Telemedicine Applications",
    ],
    stats: [
      { value: "eHealth", label: "Focus Area" },
      { value: "Regional", label: "Centre of Excellence" },
    ],
    status: "Operational",
  },
];

export default function AcademicSection() {
  return (
    <section id="academic" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Education"
          title="Academic Excellence"
          subtitle="Four of the continent's top STEM higher learning institutions call KIC home, creating a captive pipeline of talent for tenants and investors."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {institutions.map((inst) => (
            <Card key={inst.abbr} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-kic-dark px-6 py-5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-kic-gold flex items-center justify-center">
                      <span className="text-kic-dark font-bold text-lg">
                        {inst.abbr}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">
                        {inst.name}
                      </h3>
                      <Badge
                        variant={
                          inst.status === "Operational" ? "green" : "gold"
                        }
                        className="mt-1"
                      >
                        {inst.status}
                      </Badge>
                    </div>
                  </div>
                  <GraduationCap className="h-8 w-8 text-kic-gold/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <p className="text-sm font-medium">Programs</p>
                  </div>
                  <ul className="space-y-1.5 mb-6">
                    {inst.programs.map((program) => (
                      <li
                        key={program}
                        className="text-sm text-muted-foreground flex items-center gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-kic-gold shrink-0" />
                        {program}
                      </li>
                    ))}
                  </ul>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {inst.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="text-center p-3 rounded-lg bg-kic-grey-light"
                      >
                        <p className="text-lg font-bold text-kic-dark">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-center">
          {[
            { icon: Brain, label: "~2,000 ICT graduates/year" },
            { icon: Globe2, label: "~1M fluent in English" },
            { icon: GraduationCap, label: "50K tertiary grads/year nationally" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 px-6 py-4 rounded-xl bg-kic-grey-light"
            >
              <Icon className="h-5 w-5 text-kic-gold" />
              <span className="text-sm font-medium">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
