"use client";
import TretoLayout from "@/layout/TretoLayout";
import { tretoUtility } from "@/utility";
import Link from "next/link";
import { useEffect, useState } from "react";

const blogs = [
  {
    id: 1,
    title: "How I Built Vagas Nordestinas, a Job Board with React + PHP",
    image: "/img/logo_vagasnordestinas.png",
    tags: ["React", "PHP", "MySQL"],
    date: "15 March - 2026",
    excerpt:
      "Vagas Nordestinas is a job board portfolio project built with React, PHP, and MySQL. The platform allows users to browse job opportunities, view job details, and explore a real-world frontend and backend structure.",
  },
  {
    id: 2,
    title: "Building a WordPress Job Flow with Elementor and Custom Post Types",
    image: "/img/logo.png",
    tags: ["WordPress", "Elementor", "CPT"],
    date: "15 March - 2026",
    excerpt:
      "This project focuses on a WordPress-based job flow using custom post types, frontend job submission, dynamic templates, and a structured user experience for managing job listings.",
  },
  {
    id: 3,
    title: "Creating a Developer Portfolio with Next.js",
    image: "/img/fotohome.png",
    tags: ["Next.js", "Portfolio", "Frontend"],
    date: "15 March - 2026",
    excerpt:
      "A modern portfolio project created to showcase my development work, technical skills, and practical experience with frontend design and project presentation.",
  },
  {
    id: 4,
    title: "Lessons Learned While Building Real Portfolio Projects",
    image: "/img/certificate.jpg",
    tags: ["Projects", "Learning", "Development"],
    date: "15 March - 2026",
    excerpt:
      "A summary of the main lessons I learned while building practical portfolio projects, including planning, UI decisions, backend integration, and project organization.",
  },
];

const page = () => {
  const sort = 2;
  const [active, setActive] = useState(1);
  const [state, setState] = useState([]);

  useEffect(() => {
    tretoUtility.pagination(".mil-blog-card", sort, active);
    const list = document.querySelectorAll(".mil-blog-card");
    setState(tretoUtility.getPagination(list.length, sort));
  }, [active]);

  return (
    <TretoLayout noFooter>
      <div>
        <div className="mil-page">
          <div
            className="mil-bg-item"
            style={{ top: "3%", right: "15%", transform: "rotate(-45deg)" }}
          />
          <div className="container">
            <div className="mil-top-banner">
              <p className="mil-upper mil-mb-30">
                Project <span className="mil-accent">articles</span>
              </p>
              <h2 className="mil-up mil-mb-30">Development Insights</h2>
              <p className="mil-left-offset">
                A selection of project breakdowns and technical case studies
                based on my portfolio work with React, PHP, MySQL, WordPress,
                and modern frontend development.
              </p>
            </div>

            <div className="mil-blog-list mil-mb-90">
              {blogs.map((blog) => (
                <div className="mil-blog-card mil-mb-60" key={blog.id}>
                  <div className="mil-cover">
                    <Link legacyBehavior href={`/blog/${blog.id}`}>
                      <a>
                        <img src={blog.image} alt={blog.title} />
                      </a>
                    </Link>
                    <div className="mil-date mil-upper">{blog.date}</div>
                  </div>

                  <div className="mil-title">
                    <div>
                      <p className="mil-upper mil-mb-30">
                        <span className="mil-accent">
                          {blog.tags && blog.tags[0]}
                        </span>
                      </p>
                      <h3 className="mil-up mil-mb-30">{blog.title}</h3>
                    </div>

                    <div>
                      <Link legacyBehavior href={`/blog/${blog.id}`}>
                        <a className="mil-button mil-type-2">Read more</a>
                      </Link>
                    </div>
                  </div>

                  <div className="mil-card-text">
                    <p>{blog.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mil-pagination-panel">
              <ul className="mil-pagination-numbers">
                {state &&
                  state.map((s, i) => (
                    <li
                      className={active === s ? "mil-active" : ""}
                      key={`pagination-item-${i}`}
                    >
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setActive(s);
                        }}
                      >
                        {s > 9 ? s : `0${s}`}
                      </a>
                    </li>
                  ))}
              </ul>

              <div className="mil-pagination-nav">
                <div className="mil-slider-nav mil-mb-30">
                  <a
                    href="#."
                    className="mil-prev mil-reviews-prev"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(active === 1 ? 1 : active - 1);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </a>

                  <a
                    href="#."
                    className="mil-next mil-reviews-next"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(
                        active === state.length ? state.length : active + 1
                      );
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </a>
                </div>

                <div className="mil-reviews-pagination mil-upper mil-mb-30" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </TretoLayout>
  );
};

export default page;