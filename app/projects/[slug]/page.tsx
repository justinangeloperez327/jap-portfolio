import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCaseStudyView } from "@/components/projects";
import {
  getProjectBySlug,
  getProjectCaseStudy,
  projects,
} from "@/data";

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
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
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

  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="bg-background text-foreground outline-none"
    >
      <ProjectCaseStudyView
        project={project}
        caseStudy={caseStudy}
      />
    </main>
  );
}
