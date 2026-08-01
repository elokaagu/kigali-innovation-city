import SectionHeader from "@/components/common/SectionHeader";

const shareholders = [
  {
    name: "Rwanda Development Board (RDB)",
    role: "Government Shareholder",
    description:
      "Acts as a one-stop shop to accelerate Rwanda's economic growth. Provides investment promotion, policy advocacy, export development, and streamlined services including immigration support and tax incentives management.",
  },
  {
    name: "Africa50",
    role: "Infrastructure Investment Partner",
    description:
      "Pan-African investment platform established by African governments and the African Development Bank. Bridges Africa's infrastructure funding gap with 33 African country shareholders. Focus areas include Energy, ICT, Transport, Education, and Healthcare.",
  },
];

export default function ShareholdersSection() {
  return (
    <section id="shareholders" className="py-20 sm:py-28 bg-kic-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Partners"
          title="Project Shareholders"
          subtitle="KICCL is backed by the Government of Rwanda and Africa50, combining public sector support with pan-African infrastructure investment expertise."
          dark
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {shareholders.map((sh) => (
            <div
              key={sh.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-8"
            >
              <span className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-kic-gold/20 text-kic-gold">
                {sh.role}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{sh.name}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {sh.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
