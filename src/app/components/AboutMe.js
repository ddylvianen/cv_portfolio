import Image from "next/image";
import { User } from "lucide-react";

export default function AboutMe() {
  return (
    <div className="w-full h-full px-6 py-16 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full mx-auto">
        {/* Image Column */}
        <div className="flex justify-center items-start md:justify-end">
          <div className="relative w-64 h-96 rounded-lg overflow-hidden border-2 border-gray-700/50 shadow-lg">
            <Image
              src="/aboutme.jpg"
              alt="Profile picture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* About Content Column */}
        <div className="md:col-span-2 flex flex-col justify-center text-start">
          <h2 className="text-2xl font-bold flex items-center gap-2 mb-6 text-gray-100">
            <User size={20} className="text-blue-400" /> About Me
          </h2>

          <ul className="space-y-3 sm:space-y-4 text-sm text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Started programming at age 12; completed Harvard CS50.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Built IoT projects and took part in multiple hackathons and
                competitions.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Completed FABLAB course (Codetteds Suriname) — documentation
                available.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Studied Electrical & ICT for two years at MBO-NATIN Suriname.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Completed MySQL course (NHA); partial completion of Full Stack
                developer course.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 mt-1">•</span>
              <span>
                Currently studying Software Development at ROC Midden Nederland
                (MBO Utrecht).
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
