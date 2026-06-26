export type ExperienceItem = {
  date: string;
  role: string;
  responsibilities: string[];
  impact: string[];
};

export const aboutParagraphs = [
  "With over 15 years of experience across diverse software environments - including startups, public companies, and non-primary software organizations - I have honed my adaptability and gained valuable insights into varied business challenges.",
  "I specialize in enhancing developer productivity by creating tools that streamline engineering workflows and building resilient platform infrastructure. I apply my expertise in software development best practices to design and implement solutions that measurably optimize efficiency and drive results.",
  "Most recently, I have successfully driven the company-wide adoption of Generative AI tools. This included actively leading the evaluation and integration of third-party solutions and contributing significantly to the mass internal rollout of Agentforce.",
  "My comprehensive background also includes a strong foundation in testing and quality assurance, ensuring the reliability and high quality of software products throughout my career.",
];

export const experiences: ExperienceItem[] = [
  {
    date: "Jun 2024 - Actual",
    role: "Principal Software Engineer @Salesforce",
    responsibilities: [
      'Accelerated the internal adoption of proprietary AI solutions by fostering "dogfooding" across all business units.',
      "Led the strategic evaluation of the external AI landscape (including major vendors like Google, Anthropic, and OpenAI) to guide and inform company-wide adoption decisions.",
      "Established a direct feedback mechanism via regular office hours, successfully linking internal stakeholders with Product teams to drive continuous platform improvements.",
    ],
    impact: [
      "All T&P engineers utilize a coding assistance IDE, such as Cursor and/or Windsurf, as part of their standard development process.",
      "Standardized Agentforce as the core platform for all internal Agent development.",
    ],
  },
  {
    date: "Mar 2019 - Jun 2024",
    role: "Principal Software Engineer @Mulesoft",
    responsibilities: [
      "Designed, developed, and maintained backend microservices written in Golang, NodeJS, and TypeScript.",
      "Utilized Docker to containerize applications and scripts.",
      "Created Helm charts to manage Kubernetes deployments.",
      "Utilized Terraform to create AWS resources.",
      "Participated in the hiring process by conducting interviews and evaluating candidates.",
    ],
    impact: [
      "Designed and implemented a suite of multi-tooling solutions to effectively enforce best practices of the Software Development Life Cycle at a company scale.",
      "Developed and maintained a Service Catalog and Metric developers portal, providing streamlined access to services and metrics for developers, promoting productivity and collaboration.",
      "Made significant contributions to the migration of the entire Mulesoft platform to AWS EKS, improving scalability, reliability, and operational efficiency.",
    ],
  },
  {
    date: "Oct 2017 - Mar 2019",
    role: "Senior Software Engineer In Test @Elementum SCM",
    responsibilities: [
      "Performed exploratory testing for web applications.",
      "Developed automated test suites using Protractor for Angular web applications.",
      "Developed automated test suites using TestNG for Java backend services.",
      "Developed automated test suites using JMeter and BlazeMeter for web applications.",
      "Coordinated platform releases on a 2-week cycle with development teams.",
      "Participated in the hiring process by conducting interviews and evaluating candidates.",
    ],
    impact: [
      "Contributed significantly to the adoption of executing UI and performance test suites on a continuous delivery basis, enhancing the overall testing process and delivering faster feedback.",
    ],
  },
  {
    date: "Jun 2013 - Oct 2017",
    role: "Senior Quality Engineer @Gilbarco Veeder-Root",
    responsibilities: [
      "Performed various manual tests, including functional testing, regression testing, and user acceptance testing on Windows desktop applications.",
      "Conducted root cause analysis of defects and quality issues, implementing corrective and preventive actions to prevent recurrence.",
      "Created pipelines from scratch to execute automated test suites and perform regression testing on release candidates.",
      "Developed a framework for executing automated test suites using AutoIt and Python.",
      "Participated in the hiring process by conducting interviews and evaluating candidates.",
    ],
    impact: [
      "Successfully ensured the quality of a new application release, spanning multiple years, which exhibited exceptional stability with minimal reported bugs in the field.",
      "Played a foundational role in the company's adoption of test automation, driving improvements in testing efficiency and effectiveness.",
    ],
  },
  {
    date: "Jan 2012 - Jun 2013",
    role: "Quality Assurance @Ingematica",
    responsibilities: [
      "Defined and executed test plans for web applications, ensuring high stability prior to release.",
      "Managed the end-to-end defect lifecycle, including the identification, tracking, and validation of fixes.",
      "Gathered and validated technical requirements directly from end customers.",
    ],
    impact: [
      "Created multiple regression suites for legacy applications, enabling comprehensive and efficient testing of critical functionalities.",
    ],
  },
];

export const techStack = [
  "Go",
  "NodeJS",
  "TypeScript",
  "Python",
  "Strands",
  "LangChain",
  "MCP",
  "A2A",
  "Kubernetes",
  "Docker",
  "API",
  "OAS",
  "Event Driven Architecture",
  "Microservices",
  "Helm",
  "BuildPacks",
  "AWS",
  "Terraform",
  "Redis",
  "Postgresql",
  "Dynamodb",
  "Git",
  "CI/CD",
  "Testing",
];
