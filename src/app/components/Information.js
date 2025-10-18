import { Mail, Clock, Briefcase, Book, Code } from "lucide-react";

export default function Information() {
  // Theme configurations for skill chips
  const chipThemes = {
    purple: {
      bg: 'bg-purple-700/70',
      hoverBg: 'hover:bg-purple-600/70',
      border: 'border-purple-400/30',
      hoverBorder: 'hover:border-purple-400/50',
      icon: 'text-purple-300',
    },
    blue: {
      bg: 'bg-blue-700/70',
      hoverBg: 'hover:bg-blue-600/70',
      border: 'border-blue-400/30',
      hoverBorder: 'hover:border-blue-400/50',
      icon: 'text-blue-300',
    },
    cyan: {
      bg: 'bg-cyan-700/70',
      hoverBg: 'hover:bg-cyan-600/70',
      border: 'border-cyan-400/30',
      hoverBorder: 'hover:border-cyan-400/50',
      icon: 'text-cyan-300',
    },
    teal: {
      bg: 'bg-teal-700/70',
      hoverBg: 'hover:bg-teal-600/70',
      border: 'border-teal-400/30',
      hoverBorder: 'hover:border-teal-400/50',
      icon: 'text-teal-300',
    },
    emerald: {
      bg: 'bg-emerald-700/70',
      hoverBg: 'hover:bg-emerald-600/70',
      border: 'border-emerald-400/30',
      hoverBorder: 'hover:border-emerald-400/50',
      icon: 'text-emerald-300',
    },
    green: {
      bg: 'bg-green-700/70',
      hoverBg: 'hover:bg-green-600/70',
      border: 'border-green-400/30',
      hoverBorder: 'hover:border-green-400/50',
      icon: 'text-green-300',
    },
    lime: {
      bg: 'bg-lime-700/70',
      hoverBg: 'hover:bg-lime-600/70',
      border: 'border-lime-400/30',
      hoverBorder: 'hover:border-lime-400/50',
      icon: 'text-lime-300',
    },
    yellow: {
      bg: 'bg-yellow-700/70',
      hoverBg: 'hover:bg-yellow-600/70',
      border: 'border-yellow-400/30',
      hoverBorder: 'hover:border-yellow-400/50',
      icon: 'text-yellow-300',
    },
    amber: {
      bg: 'bg-amber-700/70',
      hoverBg: 'hover:bg-amber-600/70',
      border: 'border-amber-400/30',
      hoverBorder: 'hover:border-amber-400/50',
      icon: 'text-amber-300',
    },
    orange: {
      bg: 'bg-orange-700/70',
      hoverBg: 'hover:bg-orange-600/70',
      border: 'border-orange-400/30',
      hoverBorder: 'hover:border-orange-400/50',
      icon: 'text-orange-300',
    },
    red: {
      bg: 'bg-red-700/70',
      hoverBg: 'hover:bg-red-600/70',
      border: 'border-red-400/30',
      hoverBorder: 'hover:border-red-400/50',
      icon: 'text-red-300',
    },
    rose: {
      bg: 'bg-rose-700/70',
      hoverBg: 'hover:bg-rose-600/70',
      border: 'border-rose-400/30',
      hoverBorder: 'hover:border-rose-400/50',
      icon: 'text-rose-300',
    },
    pink: {
      bg: 'bg-pink-700/70',
      hoverBg: 'hover:bg-pink-600/70',
      border: 'border-pink-400/30',
      hoverBorder: 'hover:border-pink-400/50',
      icon: 'text-pink-300',
    },
    fuchsia: {
      bg: 'bg-fuchsia-700/70',
      hoverBg: 'hover:bg-fuchsia-600/70',
      border: 'border-fuchsia-400/30',
      hoverBorder: 'hover:border-fuchsia-400/50',
      icon: 'text-fuchsia-300',
    },
    violet: {
      bg: 'bg-violet-700/70',
      hoverBg: 'hover:bg-violet-600/70',
      border: 'border-violet-400/30',
      hoverBorder: 'hover:border-violet-400/50',
      icon: 'text-violet-300',
    },
    indigo: {
      bg: 'bg-indigo-700/70',
      hoverBg: 'hover:bg-indigo-600/70',
      border: 'border-indigo-400/30',
      hoverBorder: 'hover:border-indigo-400/50',
      icon: 'text-indigo-300',
    },
    sky: {
      bg: 'bg-sky-700/70',
      hoverBg: 'hover:bg-sky-600/70',
      border: 'border-sky-400/30',
      hoverBorder: 'hover:border-sky-400/50',
      icon: 'text-sky-300',
    },
  };

  // Data lists
  const skillsList = [
    'JavaScript',
    'React',
    'C/C++',
    'Python',
    'Django',
    'Flask',
    'Laravel',
    'Node.js',
    'HTML',
    'CSS',
    'Tailwind',
    'MySQL',
    'IoT',
  ];
  const softSkills = [
    'disciplined',
    'team player',
    'quick learner',
    'problem solver',
    'adaptable',
    'organized',
    'strong communication',
  ];
  const tools = ['git', 'github', 'linux', 'windows', 'vscode', 'docker', 'postman'];

  // Palettes to give each item a distinct color
  const skillsPalette = ['yellow', 'cyan', 'blue', 'emerald', 'green', 'teal', 'violet', 'purple', 'orange', 'red', 'pink', 'sky', 'amber'];
  const softPalette = ['indigo', 'violet', 'fuchsia', 'pink', 'rose', 'red', 'orange'];
  const toolsPalette = ['blue', 'sky', 'teal', 'emerald', 'violet', 'amber', 'orange'];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        {/* Work Experience - Card Style */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
          <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-100">
            <Briefcase size={20} className="text-blue-400" /> Work Experience
          </h3>
          <div className="space-y-5">
            <div className="border-l-2 border-blue-400/50 pl-4">
              <div className="flex flex-wrap gap-2 items-baseline mb-1">
                <h4 className="font-semibold text-gray-100">
                  Swimming Instructor & Floor Manager
                </h4>
                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">
                  2016 — 2024
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Managed groups, coordinated colleagues, and communicated
                progress with parents.
              </p>
            </div>

            <div className="border-l-2 border-blue-400/50 pl-4">
              <div className="flex flex-wrap gap-2 items-baseline mb-1">
                <h4 className="font-semibold text-gray-100">
                  Warehouse Associate — Albert Heijn
                </h4>
                <span className="text-xs text-gray-400 bg-gray-700/50 px-2 py-0.5 rounded">
                  Jul 2024 — Dec 2024
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Fulfilled warehouse tasks, collaborated with team members and
                solved operational problems.
              </p>
            </div>

            <div className="border-l-2 border-green-400/50 pl-4">
              <div className="flex flex-wrap gap-2 items-baseline mb-1">
                <h4 className="font-semibold text-gray-100">
                  Warehouse Associate — HEMA EDC
                </h4>
                <span className="text-xs text-green-400 bg-green-900/30 px-2 py-0.5 rounded font-medium">
                  Present
                </span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed">
                Working on picking, packing and inventory while supporting team
                workflows.
              </p>
            </div>
          </div>
        </div>

        {/* Skills & Education - Card Style */}
        <div className="flex flex-col gap-6">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-100">
              <Code size={20} className="text-purple-400" /> Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillsList.map((s, i) => {
                const theme = chipThemes[skillsPalette[i % skillsPalette.length]];
                return (
                  <span
                    key={s}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${theme.bg} ${theme.hoverBg} text-xs font-medium rounded-md border ${theme.border} ${theme.hoverBorder} transition-all cursor-default`}
                  >
                    <Code size={12} className={theme.icon} /> {s}
                  </span>
                );
              })}

              {softSkills.map((s, i) => {
                const theme = chipThemes[softPalette[i % softPalette.length]];
                return (
                  <span
                    key={s}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${theme.bg} ${theme.hoverBg} text-xs font-medium rounded-md border ${theme.border} ${theme.hoverBorder} transition-all cursor-default`}
                  >
                    <Clock size={12} className={theme.icon} /> {s}
                  </span>
                );
              })}

              {tools.map((s, i) => {
                const theme = chipThemes[toolsPalette[i % toolsPalette.length]];
                return (
                  <span
                    key={s}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${theme.bg} ${theme.hoverBg} text-xs font-medium rounded-md border ${theme.border} ${theme.hoverBorder} transition-all cursor-default`}
                  >
                    <Mail size={12} className={theme.icon} /> {s}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50 hover:border-gray-600 transition-all">
            <h3 className="text-2xl font-bold flex items-center gap-2 mb-4 text-gray-100">
              <Book size={20} className="text-green-400" /> Education
            </h3>
            <ul className="space-y-2.5 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>
                  Harvard CS50 -{" "}
                  <a
                    href="https://cs50.harvard.edu/"
                    className="text-blue-400 hover:underline"
                  >
                    Course Link
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>
                  Software Development — MBO Utrecht (ROC Midden Nederland)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>FABLAB course — Codetteds Suriname (2023)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>MySQL (NHA) — completed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400 mt-1">•</span>
                <span>Electrical & ICT studies — MBO-NATIN Suriname</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
