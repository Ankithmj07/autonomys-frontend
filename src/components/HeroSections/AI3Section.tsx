import React from 'react';
import AI3Card from '../sections/AI3Card';

const cardData = [
  {
    version: 'AI1.0',
    title: 'Centralized Machine Learning',
    description:
      'Deep learning becomes widespread as developers are able to build models with the likes of TensorFlow and PyTorch running on cloud computing provided by Big Tech. Humans are primarily passive consumers of AI technologies, interacting with narrow, rule-based systems designed for specific tasks.',
  },
  {
    version: 'AI2.0',
    title: 'Centralized Generative AI',
    description:
      'Large language models (LLMs), such as ChatGPT, Gemini and Claude, emerge alongside other Generative AI technologies built by Big Tech. Humans are offered more interactive AI experiences, albeit still through platforms controlled and deployed by centralized entities.',
  },
  {
    version: 'AI3.0',
    title: 'Decentralized Human-centric AI',
    description:
      'Open, accessible and collaborative web3-enabled AI model, app and agent development and deployment. Decentralization ensures a transparent, composable and secure ecosystem where innovation thrives. Humans not only interact with AI, but customize, train and deploy their own highly personalized Autonomys agents to act on their behalf, blurring the boundary between AI creator and consumer. The Age of Autonomy is the culmination of this paradigm.',
  },
  
];

const AI3Section: React.FC = () => {
  return (
    <section className=" space-y-4 lg:space-y-8 px-4 xl:px-35 lg:py-12 md:pb-20">
      {cardData.map((card, idx) => (
        <AI3Card
          key={idx}
          version={card.version}
          title={card.title}
          description={card.description}
        />
      ))}
    </section>
  );
};

export default AI3Section;
