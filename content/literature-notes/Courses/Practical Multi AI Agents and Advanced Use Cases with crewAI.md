---
title: Multi AI agent systems with CrewAI
date: 2024-12-11
tags:
  - literature-note
  - course
  - agents
  - AI
---

# Overview of Multi AI-Agent Systems

## Use Cases and Verticals

### General Patterns of Long-Tail Use Cases:
- Research
- Analysis
- Summarization
- Reporting
- Integration with existing systems

![Operations Automations](literature-notes/Courses/attachments/operations-automations.png)  
![Use Case Stages](literature-notes/Courses/attachments/use-cases-stages.png)

The course also provides a description of the main elements of CrewAI, which you can refer to in the first course. A new addition discussed here is the ability to create **Agents** and **Tasks** using YAML files.

## Automating Project: Planning, Estimation, and Allocation

| **Agents**            | **Tasks**           |
| ---------------------- | ------------------- |
| Project Planner        | Task breakdown      |
| Estimation Analyst     | Time estimation     |
| Allocation Strategist  | Resource allocation |

### Output:
The output will be a project plan detailing tasks, resource allocations, milestones, and responsibilities. Eventually, this plan can be pushed to platforms like Trello or Jira.

### Key Features:
1. **Cost Efficiency:** Uses `gpt-4o-mini` for reduced costs.
2. **Task Definition:** Agents and tasks are defined using YAML files.
3. **Structured Outputs:** Utilizes Pydantic classes for structured data representation.

## Internal and External Integrations

### Pre-Crew Integrations:
Sometimes integrations are performed before calling CrewAI—this involves regular code execution.

### Challenges with External Systems:
When agents need to interact with external systems such as applications, cloud services, or internal databases/apps, they may need to perform actions like:
- Internet searches
- Calendar checks
- Email replies
- Running SQL queries
- Triggering side effects (e.g., updates in external systems)
  
In some cases, agents may even write custom code dynamically.

### Real-Time Reaction & Self-Healing:
Agents are equipped with real-time reaction capabilities and self-healing mechanisms. If a tool fails during execution, agents can detect errors and attempt alternative solutions automatically.

## Progress Reporting for Projects

This feature automates the creation of project progress reports.

| **Agents**         | **Tasks**              | **Tools Used**  |
| ------------------- | ---------------------- | --------------- |
| Data Collector      | Understand project     |                 |
| Project Analyst     | Analyze progress       | Trello Tool     |
| Project Analyst     | Compile report         |                 |

# Complex Crew Setups

In this section, the instructor explains how to connect multiple crews together using conditional logic and when/how to pass information between crews.

![Crews of Agents](literature-notes/Courses/attachments/types-of-crews.png)

### Example Scenario: Research + Analysis + Summary Workflow
1. Perform parallel research on independent topics (e.g., company research vs. industry trends).
2. Use data from both researchers for combined analysis.
3. Generate summaries based on analysis results.
4. Compile a final full report that integrates all analyses and summaries.

Flows unlock numerous use cases by allowing you to execute Python code before, during, or after crew execution.

## Agentic Sales Pipeline

We use flows to build an agentic sales pipeline that includes lead generation, enrichment, scoring, and email outreach.

![Flows](literature-notes/Courses/attachments/flows.png)

### Workflow Steps:
1. Load leads from a database (using regular Python).
2. Use a "Lead Scoring" crew to gather information about each lead.
   - Assess how well each lead matches your product/business goals.
3. Save scored leads into another database (non-agentic Python).
4. Create an email-writing crew for high-scoring leads.
5. Wrap everything within a flow that manages state across execution steps.

#### Sales Pipeline Steps:
1. Research potential leads.
2. Score them based on individual/company attributes.
3. Send an initial email if they qualify as high-value leads.

#### Visualization Example:

![Agentic Sales Flow Diagram](literature-notes/Courses/attachments/agentic-sales-flow%201.png)

The "Lead Scoring" crew generates highly structured outputs so that the "Email Writing" crew can draft optimized emails for engagement purposes.

## Introduction to Flows in CrewAI

Flows have two key functions:  
1. `@start`: Marks the initial function in the flow (e.g., pulling leads from a database).  
2. `@listen`: Listens for specific events or outputs from other functions in the flow pipeline.

Example Code Implementation:

```python
from crewai import Flow
from crewai.flow.flow import listen, start

class SalesPipeline(Flow):
    @start()
    def fetch_leads(self):
        # Pull leads from the database
        return [
            {
                "lead_data": {
                    "name": "João Moura",
                    "job_title": "Director of Engineering",
                    "company": "Clearbit",
                    "email": "joao@clearbit.com",
                    "use_case": "Using AI Agent to do better data enrichment."
                },
            },
        ]

    @listen(fetch_leads)
    def score_leads(self, leads):
        scores = lead_scoring_crew.kickoff_for_each(leads)
        self.state["score_crews_results"] = scores
        return scores
        
    # Parallel Functions: Store scored leads & filter high-scoring ones
    @listen(score_leads)
    def store_leads_score(self, scores):
        return scores
    
    @listen(score_leads)
    def filter_leads(self, scores):
        return [score for score in scores if score['lead_score'].score > 70]

    @listen(filter_leads)
    def write_email(self, leads):
        emails = email_writing_crew.kickoff_for_each([lead.to_dict() for lead in leads])
        return emails
    
    @listen(write_email)
    def send_email(self, emails):
        # Send emails here
        return emails
        
flow = SalesPipeline()
```

Additional Flow Annotations:  
1. `and_`: Waits for two functions before executing another function.
```python
@listen(and_(filter_leads, store_leads_score))
def log_leads(self, leads):
    print(f"Leads: {leads}")
```
2. `router`: Routes flow paths based on conditions (e.g., high-, medium-, low-priority paths).

## Performance Optimization  

Key trade-offs involve balancing speed vs quality while maintaining consistency:  
1. Speed is achieved through smaller models (cheaper but less capable).  
2. Quality comes from larger models like GPT but at higher costs/resources.

CrewAI includes tools like `test` commands that allow Judge LLMs to evaluate agent performance systematically via scoring reports.

### Training Agents via Feedback:
CrewAI's training feature enables iterative improvements by collecting feedback during task execution cycles:
1. Feedback is processed by Judge LLMs.
2. Extracted insights are stored in memory so agents improve over time without manual intervention in future runs.

## Support Data Insight Analysis  

This module focuses on analyzing support-related data by answering questions such as:  
- Who are our customers?  
- What issues do they face?  
- What frustrations exist?  

The process includes generating insights via tabular data representation or visualizations (charts), along with suggestions for improvement compiled into final reports using GPT-powered agents (`GPT-4o`).

Example Configuration:

```python
chart_generation_agent = Agent(
  config=agents_config['chart_generation_agent'],
  allow_code_execution=True  # Enables isolated Docker-based code execution 
)
```

Testing Example:

```python
support_report_crew.test(n_iterations=1,
                         openai_model_name='gpt-4o')
```

Feedback during training helps refine tasks/prompting strategies iteratively by incorporating user suggestions into memory-based improvements over time.

## Multi-model Use Cases  

You can deploy multi-model setups where smaller models handle simpler tasks while larger/fine-tuned models tackle more complex ones—optimizing cost-performance trade-offs dynamically across workflows.


## Content Creation at Scale  

This module demonstrates how agents create content on trending topics at scale using tools like Serper (for internet search), RAG methods (retrieval augmented generation), and Groq hardware accelerators for faster processing speeds:

Workflow Includes:  
1. Searching news related to financial topics.
2. Analyzing market data trends around these topics.
3. Creating social media content & blog posts based on findings.
4. Reviewing generated content for quality assurance before publishing it online!

![Content Creation Workflow](literature-notes/Courses/attachments/content-creation.png)


Here’s your revised version of the initial notes you provided. I’ve improved grammar, sentence structure, and clarity for better readability and understanding:

# Agentic Workflows in Industry  
**Instructor:** Jacob Wilson, Commercial GenAI CTO at PWC  

## From In-House Platforms to CrewAI  
CrewAI offers a low barrier to entry, making it very easy to generate agentic workflows. For data scientists (DS), it also provides flexibility in designing and deploying solutions.

### Use Cases:  
- **Real-Time Feedback:** Incorporate user feedback into solutions dynamically.  
- **Cost Comparison:** Measure the ROI of consultants versus agents performing the same tasks.  
- **Code Generation:** Automate code creation with real-time validation, log output analysis, and iterative improvements for better code quality.  
- **Change Management Challenges:** The hardest part is getting employees accustomed to streamlined agent workflows within their existing processes.  
- **Critical Success Factors:** Accuracy and user experience are paramount. Trust can be lost quickly if the system fails, and regaining that trust can be challenging.  
- **Adoption Strategy:** Start simple before scaling complexity—follow a "crawl, walk, run" approach.


# Generating, Deploying, and Monitoring Crews  
### Bringing Agentic Systems into Production:  
1. Use the CrewAI CLI to create a new project structure.
2. Deploy crews seamlessly from local environments to production using the `crewai deploy` command.
3. This deployment process creates an API that can be integrated with tools like Slack, Zapier, or any other platform where you want to use agentic workflows.

## Blog Post Crew in Production  

The blog post crew demonstrates how to create an agentic workflow from scratch:  
1. Use the CLI to set up a new crew project.
2. Install all required dependencies automatically.
3. Execute the crew for end-to-end functionality.
