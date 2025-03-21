import { motion } from "framer-motion";
import React from "react";

interface Company {
  name: string;
  logo: string;
}

interface InfiniteLogoScrollProps {
  companies: Company[];
  direction?: "left" | "right";
  speed?: number;
}

export function InfiniteLogoScroll({
  companies,
  direction = "left",
  speed = 20
}: InfiniteLogoScrollProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [duplicatedCompanies, setDuplicatedCompanies] = React.useState<Company[]>([]);

  React.useEffect(() => {
    // Duplicate the companies array to create a seamless loop
    setDuplicatedCompanies([...companies, ...companies]);
  }, [companies]);

  return (
    <div className="relative overflow-hidden w-full">
      <motion.div
        ref={containerRef}
        className="flex gap-8 items-center"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedCompanies.map((company, idx) => (
          <div
            key={`${company.name}-${idx}`}
            className="flex-shrink-0 px-8 grayscale hover:grayscale-0 transition-all duration-200"
          >
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}