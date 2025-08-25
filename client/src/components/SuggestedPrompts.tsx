interface SuggestedPromptsProps {
  onPromptClick: (prompt: string) => void;
}

const prompts = [
  {
    id: 'windows',
    icon: 'bi-window',
    title: 'Window Options',
    prompt: 'What are your window replacement options and pricing?'
  },
  {
    id: 'bath',
    icon: 'bi-droplet',
    title: 'Bath Remodeling',
    prompt: 'Tell me about your bathroom remodeling process and timeline'
  },
  {
    id: 'siding',
    icon: 'bi-house',
    title: 'Siding Materials',
    prompt: 'How durable is your siding and what materials do you use?'
  }
];

export default function SuggestedPrompts({ onPromptClick }: SuggestedPromptsProps) {
  return (
    <section className="mb-5">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <h3 className="text-center mb-4 fw-bold">Popular Questions</h3>
          <div className="row g-4">
            {prompts.map((prompt) => (
              <div key={prompt.id} className="col-md-4">
                <div 
                  className="card prompt-card h-100" 
                  onClick={() => onPromptClick(prompt.prompt)}
                  data-testid={`prompt-card-${prompt.id}`}
                >
                  <div className="card-body d-flex flex-column">
                    <div className="text-center mb-3">
                      <i className={`bi ${prompt.icon} display-4 text-danger`}></i>
                    </div>
                    <h5 className="card-title fw-bold text-center">{prompt.title}</h5>
                    <p className="card-text text-muted text-center flex-grow-1">
                      "{prompt.prompt}"
                    </p>
                    <div className="text-center mt-auto">
                      <span className="text-danger fw-bold">Click to ask <i className="bi bi-arrow-right"></i></span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
