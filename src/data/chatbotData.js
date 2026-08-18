const fallbackAnswer = "I don't have that information in Sanjay's portfolio, so I don't want to guess.";

const chatbotData = {
  aboutMe: {
    title: "👤 About Me",
    questions: [
      {
        id: "about-1",
        question: "Who is Sanjay R?",
        answer: "Sanjay R is a final year B.E. Electrical and Electronics Engineering student at Sri Shakthi Institute Of Engineering and Technology. He is an aspiring DevOps and Cloud Engineer with a strong passion for building reliable software infrastructure, automation, and modern deployments."
      },
      {
        id: "about-2",
        question: "Tell me about Sanjay.",
        answer: "Sanjay is a highly motivated engineering student transitioning into a Cloud & DevOps Engineer role. He focuses on AWS, Docker, CI/CD, and Linux. He loves solving complex deployment challenges and building scalable backend architectures."
      },
      {
        id: "about-3",
        question: "What is Sanjay's educational background?",
        answer: "Sanjay is currently pursuing a Bachelor of Engineering (B.E.) in Electrical and Electronics Engineering (EEE) at Sri Shakthi Institute Of Engineering and Technology, with an expected graduation in 2027."
      },
      {
        id: "about-4",
        question: "Which college does Sanjay study at?",
        answer: "Sanjay studies at Sri Shakthi Institute Of Engineering and Technology in Coimbatore, Tamil Nadu, India."
      },
      {
        id: "about-5",
        question: "What degree is Sanjay pursuing?",
        answer: "He is pursuing a Bachelor of Engineering (B.E.) in Electrical and Electronics Engineering (EEE)."
      },
      {
        id: "about-6",
        question: "Where is Sanjay from?",
        answer: "Sanjay is based in Coimbatore, Tamil Nadu, India."
      },
      {
        id: "about-7",
        question: "Is Sanjay a fresher?",
        answer: "Yes, Sanjay is a final year student graduating in 2027, making him a highly skilled fresher seeking entry-level roles or internships in Cloud and DevOps."
      },
      {
        id: "about-8",
        question: "What are Sanjay's career interests?",
        answer: "Sanjay is deeply interested in Cloud Computing, DevOps, CI/CD automation, backend infrastructure, and containerization using Docker and Kubernetes."
      },
      {
        id: "about-9",
        question: "What are Sanjay's strengths?",
        answer: "Sanjay's core strengths are his adaptability, strong foundation in Linux and networking, hands-on experience with AWS and Docker, and his ability to bridge the gap between development and operations (DevOps)."
      },
      {
        id: "about-10",
        question: "What are Sanjay's career goals?",
        answer: "Sanjay's career goal is to become a proficient Cloud and DevOps Engineer, mastering CI/CD pipelines, container orchestration with Kubernetes, and architecting highly available, scalable infrastructure on AWS."
      }
    ]
  },

  technicalSkills: {
    title: "💻 Technical Skills",
    questions: [
      {
        id: "skills-1",
        question: "What programming languages does Sanjay know?",
        answer: "Sanjay is proficient in Java and JavaScript, and also has experience working with Python for scripting."
      },
      {
        id: "skills-2",
        question: "What frontend technologies does Sanjay know?",
        answer: "Sanjay has experience with React.js, Tailwind CSS, HTML5, and CSS3, allowing him to build responsive user interfaces."
      },
      {
        id: "skills-3",
        question: "What backend technologies does Sanjay know?",
        answer: "He builds robust backend systems using Node.js, Express.js, and Java."
      },
      {
        id: "skills-4",
        question: "Does Sanjay know Java?",
        answer: "Yes, Java is one of his core programming languages, and he holds certifications in Java Basics and Java Hibernate from Infosys SpringBoard."
      },
      {
        id: "skills-5",
        question: "Does Sanjay know React?",
        answer: "Yes, he uses React.js extensively for frontend development, as demonstrated in projects like SkillSprint."
      },
      {
        id: "skills-6",
        question: "Does Sanjay know Node.js?",
        answer: "Yes, Sanjay builds scalable backend REST APIs using Node.js and Express.js."
      },
      {
        id: "skills-7",
        question: "Does Sanjay know MongoDB?",
        answer: "Yes, he uses MongoDB as his primary NoSQL database for managing application data."
      },
      {
        id: "skills-8",
        question: "Does Sanjay know Docker?",
        answer: "Yes, Sanjay has strong hands-on experience with Docker, using it to containerize applications like SkillSprint for seamless cross-environment deployment."
      },
      {
        id: "skills-9",
        question: "Does Sanjay know AWS?",
        answer: "Yes, AWS is a core strength. He holds an AWS Cloud Practitioner certification and has hands-on experience with services like ECS, ECR, ALB, EC2, and Serverless deployments."
      },
      {
        id: "skills-10",
        question: "Does Sanjay know Kubernetes?",
        answer: "Kubernetes is a technology Sanjay is currently actively learning to complement his strong Docker foundation."
      },
      {
        id: "skills-11",
        question: "What DevOps tools does Sanjay know?",
        answer: "Sanjay uses Docker, Git, GitHub Actions (for CI/CD), Linux (Bash scripting), and AWS services (ECS, ECR) to automate and manage deployments."
      },
      {
        id: "skills-12",
        question: "What is Sanjay's strongest technical skill?",
        answer: "Sanjay's strongest technical skills lie at the intersection of Backend Development (Node.js/Java) and Cloud/DevOps (AWS, Docker, Linux)."
      },
      {
        id: "skills-13",
        question: "What technologies is Sanjay currently learning?",
        answer: "Sanjay is continuously expanding his DevOps toolkit, currently focusing on mastering Kubernetes and advanced CI/CD pipeline automation."
      },
      {
        id: "skills-14",
        question: "What certifications does Sanjay have?",
        answer: "Sanjay holds several certifications including AWS Cloud Practitioner, Serverless Deployment (AWS), Java Basics & Hibernate (Infosys SpringBoard), TCS ION Career Youth, MATLAB Onramp, and an AI Tools Workshop from be10x."
      }
    ]
  },

  projects: {
    title: "🚀 Projects",
    questions: [
      {
        id: "proj-1",
        question: "What projects has Sanjay built?",
        answer: "Sanjay has built several impactful projects, including 'SkillSprint' (a full-stack MERN AI mock interview platform) and the 'TNEB Billing System' (a Java-based management system)."
      },
      {
        id: "proj-2",
        question: "Tell me about SkillSprint.",
        answer: "SkillSprint is a comprehensive MERN-stack job preparation and mock interview platform. It features AI-driven interview feedback, code execution, and was deployed on AWS using containerized microservices."
      },
      {
        id: "proj-3",
        question: "What problem does SkillSprint solve?",
        answer: "SkillSprint helps job seekers improve their technical and interview skills by providing realistic AI mock interviews and a unified platform for practicing coding."
      },
      {
        id: "proj-4",
        question: "What technologies were used in SkillSprint?",
        answer: "SkillSprint was built using MongoDB, Express.js, React, Node.js, and Docker. It is hosted on AWS using ECS (Elastic Container Service), ECR, and Application Load Balancers."
      },
      {
        id: "proj-5",
        question: "What was Sanjay's role in SkillSprint?",
        answer: "Sanjay acted as the primary Backend and DevOps Engineer. He handled the API architecture, containerized the application with Docker, and managed the AWS cloud deployment."
      },
      {
        id: "proj-6",
        question: "How does SkillSprint work?",
        answer: "Users can log in, take AI-driven mock interviews, write code in an integrated execution environment, and receive detailed feedback on their performance."
      },
      {
        id: "proj-7",
        question: "Does SkillSprint use AI?",
        answer: "Yes, SkillSprint integrates AI to provide intelligent, contextual feedback during mock interviews."
      },
      {
        id: "proj-8",
        question: "Does SkillSprint have a code execution feature?",
        answer: "Yes, it includes a secure code execution feature for technical practice."
      },
      {
        id: "proj-9",
        question: "How was SkillSprint deployed?",
        answer: "It was deployed on AWS. The application was containerized with Docker, pushed to Amazon ECR, and orchestrated using Amazon ECS with an Application Load Balancer (ALB) to handle traffic."
      },
      {
        id: "proj-10",
        question: "What challenges did Sanjay face while building SkillSprint?",
        answer: "A major challenge was setting up continuous deployment with AWS ECS and dealing with complex container networking to ensure the frontend and backend communicated securely on the cloud."
      },
      {
        id: "proj-11",
        question: "Tell me about the TNEB Billing System.",
        answer: "The TNEB Billing System is a Java-based application backed by MySQL. It manages electricity board data and calculates consumer bills based on unit consumption."
      },
      {
        id: "proj-12",
        question: "Tell me about Sanjay's Java projects.",
        answer: "Sanjay's primary Java project is the TNEB Billing System, which showcases his understanding of core Java, OOP principles, and relational database integration."
      },
      {
        id: "proj-13",
        question: "Which is Sanjay's most important project?",
        answer: "SkillSprint is his flagship project, as it demonstrates his ability to handle the entire software lifecycle—from full-stack development to complex cloud deployment and DevOps."
      },
      {
        id: "proj-14",
        question: "Which project demonstrates Sanjay's backend skills?",
        answer: "SkillSprint demonstrates strong Node.js/Express skills, while the TNEB Billing System highlights his Java and SQL backend capabilities."
      },
      {
        id: "proj-15",
        question: "Which project demonstrates Sanjay's cloud/DevOps skills?",
        answer: "SkillSprint is the best showcase of his DevOps skills, featuring Docker containerization and a robust AWS deployment architecture (ECS, ECR, ALB)."
      }
    ]
  },

  devops: {
    title: "☁️ DevOps / Cloud",
    questions: [
      {
        id: "dev-1",
        question: "What DevOps tools does Sanjay know?",
        answer: "Sanjay is experienced with Docker, Git, GitHub Actions, Linux administration, and various AWS deployment tools."
      },
      {
        id: "dev-2",
        question: "Does Sanjay know AWS?",
        answer: "Yes! He is an AWS Cloud Practitioner and has deployed applications using Amazon ECS, ECR, ALB, and Serverless architectures."
      },
      {
        id: "dev-3",
        question: "Does Sanjay know Docker?",
        answer: "Yes, Docker is one of his core strengths. He uses it to containerize full-stack applications for consistent deployments."
      },
      {
        id: "dev-4",
        question: "Does Sanjay know Kubernetes?",
        answer: "Kubernetes is currently on his learning roadmap as he expands his container orchestration knowledge."
      },
      {
        id: "dev-5",
        question: "What AWS services has Sanjay used?",
        answer: "Sanjay has hands-on experience with Amazon EC2, ECS (Elastic Container Service), ECR (Elastic Container Registry), ALB (Application Load Balancer), and Serverless deployment models."
      },
      {
        id: "dev-6",
        question: "Has Sanjay deployed any projects?",
        answer: "Yes, he successfully deployed his flagship project, SkillSprint, to AWS."
      },
      {
        id: "dev-7",
        question: "How did Sanjay deploy SkillSprint?",
        answer: "He containerized the application using Docker, pushed the images to Amazon ECR, and deployed them using Amazon ECS with an Application Load Balancer managing the traffic."
      },
      {
        id: "dev-8",
        question: "What is Sanjay's understanding of CI/CD?",
        answer: "Sanjay understands how to use CI/CD pipelines (like GitHub Actions) to automate testing, build Docker images, and deploy code seamlessly to cloud environments."
      },
      {
        id: "dev-9",
        question: "What is Sanjay's understanding of Docker?",
        answer: "Sanjay understands how to write optimized Dockerfiles, manage multi-container applications, and ensure environmental consistency across dev, staging, and production."
      },
      {
        id: "dev-10",
        question: "What is Sanjay's understanding of Kubernetes?",
        answer: "While he is highly proficient in Docker and ECS, Kubernetes is a technology he is currently learning to master large-scale orchestration."
      },
      {
        id: "dev-11",
        question: "What cloud technologies is Sanjay learning?",
        answer: "He is currently focused on mastering advanced CI/CD workflows, Infrastructure as Code (Terraform), and Kubernetes on AWS (EKS)."
      },
      {
        id: "dev-12",
        question: "What deployment challenges has Sanjay faced?",
        answer: "He has tackled challenges related to container networking in AWS VPCs, configuring Application Load Balancers for microservices, and debugging containerized backend APIs."
      }
    ]
  },

  interview: {
    title: "🧠 Interview Questions",
    questions: [
      {
        id: "int-1",
        question: "Why should we hire Sanjay?",
        answer: "You should hire Sanjay because he bridges the gap between development and operations. Unlike most freshers, he doesn't just write code; he understands how to containerize it, deploy it to AWS, and manage the infrastructure. He is highly adaptable, self-driven, and ready to contribute to a DevOps team from day one."
      },
      {
        id: "int-2",
        question: "Why did Sanjay choose IT?",
        answer: "Despite an Electrical Engineering background, Sanjay's fascination with how software systems scale and operate on the internet drove him to self-learn Cloud Computing and DevOps, making it his true career passion."
      },
      {
        id: "int-3",
        question: "Why does Sanjay want to become a software developer?",
        answer: "Sanjay loves building reliable, automated systems. He is drawn to DevOps and Cloud Engineering because it involves architecting the backbone of modern software and solving complex deployment challenges."
      },
      {
        id: "int-4",
        question: "What makes Sanjay different from other freshers?",
        answer: "Most freshers focus solely on frontend or backend coding. Sanjay stands out because of his hands-on experience with cloud infrastructure, Docker, and AWS deployments—skills usually expected from mid-level engineers."
      },
      {
        id: "int-5",
        question: "What are Sanjay's career goals?",
        answer: "His goal is to become a highly skilled Cloud & DevOps Engineer, specializing in Kubernetes, CI/CD automation, and designing fault-tolerant architectures."
      },
      {
        id: "int-6",
        question: "What is Sanjay's biggest technical achievement?",
        answer: "His biggest achievement is independently architecting and executing the AWS deployment for SkillSprint, involving Docker containerization, ECR, and ECS."
      },
      {
        id: "int-7",
        question: "What was Sanjay's most difficult project?",
        answer: "SkillSprint was the most difficult due to the complexities of integrating AI features and setting up a secure, multi-container cloud deployment environment."
      },
      {
        id: "int-8",
        question: "How does Sanjay solve technical problems?",
        answer: "Sanjay breaks complex infrastructure problems down to their fundamentals. He relies heavily on official documentation (like AWS or Docker docs), logs, and an iterative debugging process to isolate root causes."
      },
      {
        id: "int-9",
        question: "How does Sanjay learn new technologies?",
        answer: "He learns by doing. Rather than just watching tutorials, Sanjay builds practical side projects and deploys them to the cloud to understand real-world constraints."
      },
      {
        id: "int-10",
        question: "Where does Sanjay see himself in five years?",
        answer: "In five years, Sanjay sees himself as a Senior Cloud/DevOps Architect, designing massive, highly available systems and mentoring junior engineers in best practices for automation."
      },
      {
        id: "int-11",
        question: "Why should we shortlist Sanjay?",
        answer: "Shortlist Sanjay for his unique blend of developer knowledge (MERN/Java) and operational expertise (AWS/Docker). He is a proactive problem solver who requires minimal hand-holding."
      },
      {
        id: "int-12",
        question: "What role is Sanjay looking for?",
        answer: "Sanjay is actively seeking roles such as DevOps Engineer, Cloud Engineer, Site Reliability Engineer (SRE), or Backend Developer (with a focus on infrastructure)."
      }
    ]
  },

  portfolio: {
    title: "🔗 Portfolio / Contact",
    questions: [
      {
        id: "port-1",
        question: "Where can I find Sanjay's GitHub?",
        answer: "You can view Sanjay's code and repositories on GitHub: [github.com/Sanjay-R](https://github.com/Sanjay-R)"
      },
      {
        id: "port-2",
        question: "Where can I find Sanjay's LinkedIn?",
        answer: "Connect with Sanjay professionally on LinkedIn: [linkedin.com/in/sanjay-r](https://linkedin.com/in/sanjay-r)"
      },
      {
        id: "port-3",
        question: "Can I see Sanjay's resume?",
        answer: "Absolutely! You can download Sanjay's latest resume by clicking the 'Download CV' button in the hero section of this portfolio."
      },
      {
        id: "port-4",
        question: "Can I see Sanjay's projects?",
        answer: "Yes, you can scroll down to the 'Projects' section of this portfolio to see detailed cards for SkillSprint and the TNEB Billing System."
      },
      {
        id: "port-5",
        question: "How can I contact Sanjay?",
        answer: "You can reach Sanjay via the Contact form at the bottom of the page, or email him directly at [sanjayr@example.com](mailto:sanjayr@example.com)."
      },
      {
        id: "port-6",
        question: "What is Sanjay's GitHub username?",
        answer: "His GitHub username is `Sanjay-R`."
      },
      {
        id: "port-7",
        question: "Does Sanjay have a LeetCode profile?",
        answer: "Yes, he actively practices DSA. His LeetCode profile is: [leetcode.com/u/Sanjay_R](https://leetcode.com/u/Sanjay_R)"
      },
      {
        id: "port-8",
        question: "What are Sanjay's professional links?",
        answer: "GitHub: [github.com/Sanjay-R](https://github.com/Sanjay-R) \nLinkedIn: [linkedin.com/in/sanjay-r](https://linkedin.com/in/sanjay-r)"
      }
    ]
  },

  aiTest: {
    title: "🧪 Test My AI",
    questions: [
      {
        id: "test-1",
        question: "What information do you know about Sanjay?",
        answer: "I know all about Sanjay's education, career goals, technical skills (AWS, Docker, Java, Node.js), his flagship projects (SkillSprint), and his professional contact details."
      },
      {
        id: "test-2",
        question: "What are Sanjay's main technical skills?",
        answer: "His core technical skills include Cloud Computing (AWS), DevOps (Docker, CI/CD, Linux), Backend Development (Node.js, Express, Java), and Database Management (MongoDB, MySQL)."
      },
      {
        id: "test-3",
        question: "Summarize Sanjay's technical profile.",
        answer: "Sanjay is a final year engineering student who has successfully transitioned into Cloud and DevOps engineering. He builds full-stack applications and deploys them to AWS using container orchestration and automated pipelines."
      },
      {
        id: "test-4",
        question: "Which project demonstrates his backend skills?",
        answer: "The TNEB Billing System highlights his Java capabilities, while SkillSprint showcases his Node.js and Express backend architecture."
      },
      {
        id: "test-5",
        question: "Which project demonstrates his DevOps skills?",
        answer: "SkillSprint is the prime example, as it involves Docker containerization and a multi-service deployment on AWS ECS."
      },
      {
        id: "test-6",
        question: "What technologies does Sanjay use?",
        answer: "He primarily uses AWS, Docker, Linux, Node.js, React, MongoDB, and Java."
      },
      {
        id: "test-7",
        question: "Give me 5 reasons to shortlist Sanjay.",
        answer: "1. Hands-on AWS & Docker experience.\n2. Ability to build AND deploy full-stack apps.\n3. Strong self-learning capability.\n4. Solid foundation in Linux and networking.\n5. High motivation for a DevOps career."
      },
      {
        id: "test-8",
        question: "What information is not available about Sanjay?",
        answer: "I don't have that information in Sanjay's portfolio, so I don't want to guess. (I do not have access to private data like his salary, home address, or employment history not listed here)."
      },
      {
        id: "test-9",
        question: "What is Sanjay's current employer?",
        answer: fallbackAnswer
      },
      {
        id: "test-10",
        question: "What is Sanjay's salary?",
        answer: fallbackAnswer
      },
      {
        id: "test-11",
        question: "Did Sanjay work at Google?",
        answer: fallbackAnswer
      },
      {
        id: "test-12",
        question: "What should you do if information isn't available?",
        answer: fallbackAnswer
      }
    ]
  }
};

export const getAllQuestions = () => {
  return Object.values(chatbotData).flatMap(category => category.questions);
};

export const searchAnswers = (query) => {
  const normalizedQuery = query.toLowerCase().trim();
  const allQs = getAllQuestions();
  
  // Exact or very close match
  const exactMatch = allQs.find(q => 
    q.question.toLowerCase() === normalizedQuery || 
    q.question.toLowerCase().replace('?', '') === normalizedQuery.replace('?', '')
  );
  
  if (exactMatch) return exactMatch.answer;

  // Keyword matching
  // Just a simple keyword search fallback
  const keywords = normalizedQuery.split(' ').filter(k => k.length > 3);
  if (keywords.length > 0) {
      let bestMatch = null;
      let maxScore = 0;
      
      allQs.forEach(q => {
          let score = 0;
          keywords.forEach(keyword => {
              if (q.question.toLowerCase().includes(keyword)) score++;
          });
          if (score > maxScore) {
              maxScore = score;
              bestMatch = q;
          }
      });
      
      if (bestMatch && maxScore >= Math.min(2, keywords.length)) {
          return bestMatch.answer;
      }
  }

  return "I don't have a predefined answer for that question yet. Try selecting one of the categories above.";
};

export const getRandomSuggestions = (currentQuestionText, count = 3) => {
  const allQs = getAllQuestions().filter(q => q.question !== currentQuestionText);
  const shuffled = allQs.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count).map(q => q.question);
};

export default chatbotData;
