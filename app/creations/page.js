"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export default function Creations() {
  const projects = [
    {
      title: "UK Road Accident Analysis Dashboard",
      description:
        "Examined road accident datasets to uncover patterns in accident frequency, severity, and environmental conditions. Performed data preprocessing and transformation to ensure accuracy and consistency. Created calculated measures using DAX to evaluate key metrics and relationships. Designed an interactive dashboard to highlight high-risk locations, vehicle involvement, and road condition impacts for safety insights.",
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling"],
      year: "2025",
      pdf: "/uk-road.pdf",
    },
    {
      title: "Movies Analysis Dashboard",
      description:
        "Explored movie datasets to identify trends in ratings, revenue, genres, and audience engagement. Conducted data cleaning and transformation to maintain structured and reliable data. Generated calculated metrics using DAX for performance evaluation. Designed a dynamic dashboard to present genre-wise distribution, revenue insights, and popularity patterns effectively.",
      tools: ["Power BI", "DAX", "Data Visualization", "Power Query"],
      year: "2025",
      pdf: "/moviess.pdf",
    },
    {
      title: "Sales Analysis Dashboard",
      description:
        "Evaluated retail sales data containing 2000+ transactions to identify patterns in revenue, profit, and customer purchasing behavior. Organized and refined datasets using Excel functions for accurate reporting. Constructed Pivot Tables and charts to summarize key metrics. Created an interactive dashboard to present regional performance, product trends, and monthly sales insights.",
      tools: ["Microsoft Excel", "Pivot Tables", "Charts", "Slicers","Power Query","Data Modelling",],
      year: "2025",
      pdf: "/sales-analysis.pdf",
    },
    {
      title: "COVID-19 Data Analysis Dashboard",
      description:
        "Developed an interactive dashboard to analyze global COVID-19 trends, including total cases, deaths, recoveries, testing, and vaccination data. Performed data cleaning and transformation to ensure accuracy and consistency. Built dynamic visualizations using Pivot Tables, charts, and KPI metrics to track country-wise performance and time-based trends. The dashboard provides insights into infection patterns, recovery rates, and vaccination progress, helping in better understanding of the pandemic impact..",
      tools: ["Microsoft Excel", "Power Query", "Pivot Tables", "Charts","Data Modelling"],
      year: "2024",
      pdf: "/covid-19.pdf",
    },
    {
      title: "Pizza Sales Dashboard",
      description:
        "Developed an interactive Pizza Sales Dashboard using Microsoft Excel to analyze overall sales performance and business trends. Performed data cleaning and transformation to prepare the dataset for analysis. Created key performance indicators such as total revenue, total orders, total quantity, and average price to monitor business metrics. Built dynamic visualizations using Pivot Tables, charts, and slicers to analyze sales by category, size, time period, and time slots. Conducted detailed analysis to identify top-selling pizzas, revenue distribution, and customer purchasing patterns. The dashboard provides clear and actionable insights, demonstrating strong skills in data analysis, visualization, and dashboard design.",
      tools: ["Power BI", "Pivot Tables", "Charts", "Slicers", "Data Analysis"],
      year: "2025",
      pdf: "/pizza.pdf",
    },

    // ✅ NEW PROJECT ADDED
    {
      title: "Telecom Customer Churn Analysis Dashboard",
      description:
        "Designed and built an interactive Telecom Customer Churn Analysis Dashboard using Power BI to analyze customer retention and churn behavior. Performed data cleaning and transformation using Power Query to ensure structured and reliable data. Created key performance indicators such as total customers, churned customers, revenue, and average revenue to monitor business performance. Utilized DAX to build calculated measures for churn rate, tenure analysis, and revenue insights. Designed dynamic visualizations to analyze customer demographics, contract types, payment methods, and tenure distribution. The dashboard provides actionable insights into factors influencing customer churn, helping businesses improve retention strategies and decision-making.",
      tools: ["Power BI", "DAX", "Power Query", "Data Modeling", "Data Visualization"],
      year: "2025",
       pdf: "/telecom.pdf",
    },
  ];

  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);

  return (
    <section className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-6 py-16">
      <h2 className="text-4xl font-extrabold mb-12 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      {/* Embla Carousel */}
      <div className="overflow-hidden w-full max-w-3xl" ref={emblaRef}>
        <div className="flex">
          {projects.map((proj, index) => (
            <motion.article
              key={index}
              className="flex-[0_0_100%] px-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="p-6 rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition-all h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-pink-400 mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {proj.description}
                  </p>
                </div>

                <div>
                  {/* Tools */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {proj.tools.map((tool, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800/60 text-purple-300 text-xs rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* PDF Link */}
                  {proj.pdf && (
                    <a
                      href={proj.pdf}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mb-3 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition"
                    >
                      View PDF
                    </a>
                  )}

                  {/* Year */}
                  <p className="text-gray-500 text-xs">📅 {proj.year}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Helper text for mobile */}
      <p className="mt-6 text-gray-400 text-sm">Swipe ➡ or wait for auto-slide</p>
    </section>
  );
}