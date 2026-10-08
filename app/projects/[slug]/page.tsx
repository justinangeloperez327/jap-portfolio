import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyView } from "@/components/projects";
import { JsonLd } from "@/components/seo";
import {
  brand,
  getProjectBySlug,
  getProjectCaseStudy,
  projects,
} from "@/data";
import { createPageMetadata } from "@/lib/metadata";
import { getAbsoluteUrl } from "@/lib/site-url";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return createPageMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    keywords: [
      project.title,
      project.category,
      ...project.technologies,
    ],
  });
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const caseStudy = getProjectCaseStudy(project);
  const projectUrl = getAbsoluteUrl(
    `/projects/${project.slug}`,
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    headline: project.subtitle,
    description: project.description,
    url: projectUrl,
    creator: {
      "@type": "Person",
      name: brand.author,
      url: getAbsoluteUrl("/"),
    },
    keywords: project.technologies.join(", "),
    genre: project.category,
    isPartOf: {
      "@type": "WebSite",
      name: brand.name,
      url: getAbsoluteUrl("/"),
    },
    ...(project.github
      ? {
          codeRepository: project.github,
        }
      : {}),
  };

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <JsonLd data={structuredData} />
      <ProjectCaseStudyView
        project={project}
        caseStudy={caseStudy}
      />
    </main>
  );
}
