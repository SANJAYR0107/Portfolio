export const chatbotCategories = [
  {
    id: "about",
    title: "👤 About Me",
    questions: [
      "Who is Sanjay R?",
      "Tell me about Sanjay.",
      "What is Sanjay's educational background?",
      "Which college does Sanjay study at?",
      "What degree is Sanjay pursuing?",
      "Where is Sanjay from?",
      "Is Sanjay a fresher?",
      "What are Sanjay's career interests?",
      "What are Sanjay's strengths?",
      "What are Sanjay's career goals?"
    ]
  },
  {
    id: "technical_skills",
    title: "💻 Technical Skills",
    questions: [
      "What programming languages does Sanjay know?",
      "What frontend technologies does Sanjay know?",
      "What backend technologies does Sanjay know?",
      "Does Sanjay know Java?",
      "Does Sanjay know React?",
      "Does Sanjay know Node.js?",
      "Does Sanjay know MongoDB?",
      "Does Sanjay know Docker?",
      "Does Sanjay know AWS?",
      "Does Sanjay know Kubernetes?",
      "What DevOps tools does Sanjay know?",
      "What is Sanjay's strongest technical skill?",
      "What technologies is Sanjay currently learning?"
    ]
  },
  {
    id: "projects",
    title: "🚀 Projects",
    questions: [
      "What projects has Sanjay built?",
      "Tell me about SkillSprint.",
      "What problem does SkillSprint solve?",
      "What technologies were used in SkillSprint?",
      "What was Sanjay's role in SkillSprint?",
      "How does SkillSprint work?",
      "Does SkillSprint use AI?",
      "Does SkillSprint have a code execution feature?",
      "How was SkillSprint deployed?",
      "What challenges did Sanjay face while building SkillSprint?",
      "Tell me about the TNEB Billing System.",
      "Tell me about Sanjay's Java projects.",
      "Which is Sanjay's most important project?",
      "Which project demonstrates Sanjay's backend skills?",
      "Which project demonstrates Sanjay's cloud/DevOps skills?"
    ]
  },
  {
    id: "devops_cloud",
    title: "☁️ DevOps / Cloud",
    questions: [
      "What DevOps tools does Sanjay know?",
      "Does Sanjay know AWS?",
      "Does Sanjay know Docker?",
      "Does Sanjay know Kubernetes?",
      "What AWS services has Sanjay used?",
      "Has Sanjay deployed any projects?",
      "How did Sanjay deploy SkillSprint?",
      "What is Sanjay's understanding of CI/CD?",
      "What is Sanjay's understanding of Docker?",
      "What is Sanjay's understanding of Kubernetes?",
      "What cloud technologies is Sanjay learning?",
      "What deployment challenges has Sanjay faced?"
    ]
  },
  {
    id: "interview",
    title: "🧠 Interview Questions",
    questions: [
      "Why should we hire Sanjay?",
      "Why did Sanjay choose IT?",
      "Why does Sanjay want to become a software developer?",
      "What makes Sanjay different from other freshers?",
      "What are Sanjay's career goals?",
      "What is Sanjay's biggest technical achievement?",
      "What was Sanjay's most difficult project?",
      "How does Sanjay solve technical problems?",
      "How does Sanjay learn new technologies?",
      "Where does Sanjay see himself in five years?",
      "Why should we shortlist Sanjay?",
      "What role is Sanjay looking for?"
    ]
  },
  {
    id: "portfolio_contact",
    title: "🔗 Portfolio / Contact",
    questions: [
      "Where can I find Sanjay's GitHub?",
      "Where can I find Sanjay's LinkedIn?",
      "Can I see Sanjay's resume?",
      "Can I see Sanjay's projects?",
      "How can I contact Sanjay?",
      "What is Sanjay's GitHub username?",
      "Does Sanjay have a LeetCode profile?",
      "What are Sanjay's professional links?"
    ]
  },
  {
    id: "test",
    title: "🧪 Test My AI",
    questions: [
      "What information do you know about Sanjay?",
      "What information don't you know about Sanjay?",
      "What should you do if information isn't available?",
      "What is Sanjay's current employer?",
      "What is Sanjay's salary?",
      "Did Sanjay work at Google?",
      "What certifications does Sanjay have?",
      "Compare Sanjay's projects.",
      "Which project demonstrates his backend skills?",
      "Which project demonstrates his DevOps skills?",
      "Summarize Sanjay's technical profile.",
      "Give me 5 reasons to shortlist Sanjay."
    ]
  }
];

export const getRandomSuggestions = (currentQuestion, count = 3) => {
  const allQuestions = chatbotCategories.flatMap(c => c.questions).filter(q => q !== currentQuestion);
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};
