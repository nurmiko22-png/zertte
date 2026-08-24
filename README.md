# ZERTTE Learning Path

https://github.com/mmeirbek/front_future.git
First, inspect the entire existing repository. Understand the current architecture, components, routes, dependencies, API structure and styling before making any changes.
ZERTTE — Full Frontend Product Implementation
You are a senior frontend engineer and product designer with 10+ years of experience building production-grade EdTech, SaaS, gamification and AI products.
Your task is to build the complete frontend for ZERTTE, an AI-powered adaptive learning platform.
Do NOT create a generic SaaS dashboard.
The product should feel like:
Duolingo UX mechanics + modern AI product + knowledge graph + adaptive learning system
but it must have its own ZERTTE visual identity.
1. VERY IMPORTANT — START BY INSPECTING THE EXISTING REPOSITORY
Before writing significant frontend code:
Inspect the entire existing repository.
Inspect the current Next.js application.
Inspect README.md.
Inspect docs/api-contract.md.
Inspect all existing frontend components.
Inspect existing API client code.
Inspect authentication logic.
Inspect TypeScript types.
Inspect all currently available backend endpoints.
Inspect the Prisma/backend data model if available.
Understand how Student and Teacher roles work.
Understand the actual response shapes from the backend.
The existing repository is:
https://github.com/mmeirbek/front_future
The project is called:
ZERTTE
Do not invent backend endpoints if an equivalent endpoint already exists.
Do not change backend architecture.
Do not replace the existing backend.
The frontend must consume the existing API contract.
If something is ambiguous, missing, contradictory or impossible to implement from the existing backend, ASK ME A QUESTION BEFORE MAKING A MAJOR ASSUMPTION.
You are explicitly allowed and encouraged to ask me frontend/product questions before implementation.
2. EXISTING TECHNOLOGY STACK
Keep the existing project stack.
Primary stack:
Next.js
TypeScript
Tailwind CSS
React
Use modern production-quality frontend architecture.
You may introduce/use:
shadcn/ui where useful
Framer Motion for animations
Lucide icons
TanStack Query for server state if appropriate
Zustand for lightweight client state if appropriate
Recharts for teacher analytics if appropriate
proper i18n architecture
Do not introduce unnecessary libraries.
Keep the application maintainable.
3. PRODUCT CONCEPT
ZERTTE is an:
AI-powered adaptive learning platform.
The core product loop is:
Student
↓
Diagnostic
↓
Knowledge State
↓
Adaptive Knowledge Tree
↓
Recommended Topic
↓
Lesson
↓
Question
↓
Answer
↓
AI Feedback
↓
Mastery Update
↓
New Topic Unlocked
↓
Next Recommended Topic

The UI must make this loop visually obvious.
The user should immediately understand:
"ZERTTE knows what I know, what I don't know, and what I should learn next."
This is the core product value.
4. IMPORTANT — REAL BACKEND FEATURES
From the existing API contract, the backend already supports important learning functionality.
Use the actual backend implementation and contract.
Important existing concepts include:
Student
student profile
student preferences
subjects
knowledge state
topic mastery
attempts
correct attempts
mastery trend
prerequisites
roadmap
current topic
next topic
completed topics
diagnostic
tasks
task attempts
mistake type
AI student sessions
AI tutor
streaming/SSE
structured AI widgets
5. MASTERy IS A REAL BACKEND METRIC
Mastery is NOT fake.
Mastery is one of the most important existing backend concepts.
The backend can provide concepts such as:
mastery
attempts
correctAttempts
trend
prerequisiteMet
lastActivity

After an attempt the backend can return information such as:
masteryBefore
masteryAfter
nextTaskDifficulty
prerequisiteUnlocked
mistakeType
feedback

Use these real values.
Do NOT replace Mastery with XP.
Mastery should be the main learning metric.
6. ROADMAP / KNOWLEDGE TREE
The backend has adaptive roadmap concepts including:
completed
current
next
goals
blockedBy
reason
prerequisiteMet

This is extremely important.
The main student learning interface should visualize this as a Knowledge Tree / Learning Map.
Do NOT make the primary learning screen a boring list of lessons.
The primary experience is a visual learning path.
7. VISUAL REFERENCES
The attached screenshots are the main visual/UX references.
Use them as inspiration for:
layout
spacing
visual hierarchy
gamification
learning path
lesson screen
progress
navigation
immersive learning experience
The references are inspired by Duolingo.
DO NOT copy Duolingo's branding, logo, mascot, exact illustrations or copyrighted visual assets.
Instead create a unique ZERTTE identity.
The UX philosophy should feel familiar:
simple
playful
clear
motivating
gamified
progress-oriented

But the visual identity must belong to ZERTTE.
8. DESIGN DIRECTION
The selected direction is:
80% between modern EdTech and highly gamified learning
Primary characteristics:
🎮 Gamified
🧠 Intelligent
🤖 AI / technology
Friendly
Modern
Premium enough for a serious EdTech product
Energetic
Highly visual
Age target:
12–18
Therefore the UI should be fun and approachable without looking childish.
Avoid:
corporate boring dashboards
excessive glassmorphism
excessive gradients
excessive neon
childish kindergarten aesthetics
overly complex enterprise UI
9. THEME
Primary theme:
LIGHT MODE
Do not make dark mode the primary interface.
The application should look excellent in bright/light mode.
Optional dark mode can be architected later, but it is not the priority.
10. COLOR SYSTEM
Primary brand color:
PURPLE
Use purple as the main brand/accent color.
Recommended foundation:
Primary:
#7C3AED

Primary hover:
#6D28D9

Primary light:
#EDE9FE

Primary subtle:
#F5F3FF

Base:
Background:
#F8FAFC

Surface:
#FFFFFF

Surface secondary:
#F1F5F9

Border:
#E2E8F0

Typography:
Primary text:
#0F172A

Secondary text:
#64748B

Muted text:
#94A3B8

Semantic colors:
Success:
#10B981

Warning:
#F59E0B

Error:
#EF4444

Info:
#0EA5E9

The product can use many colors.
Different subjects should have their own visual identity.
For example:
Mathematics → Purple / Indigo

Physics → Blue / Cyan

Programming → Dark Blue / Violet

Biology → Green

Chemistry → Orange

History → Amber

Languages → Pink / Coral

However:
Purple remains the ZERTTE brand color.
Do not make every card rainbow-colored.
Use color intentionally to communicate:
subject
state
progress
difficulty
success
warning
locked/unlocked state
11. TYPOGRAPHY
Use:
Inter
Typography hierarchy:
H1:
36–44px / 700

H2:
28–32px / 700

H3:
20–24px / 600

Body:
15–16px / 400

Labels:
13–14px / 500

Caption:
12px / 400

The interface should have excellent readability.
12. BORDER RADIUS
Use a friendly but professional radius system:
Small:
8px

Buttons:
10–12px

Inputs:
10–12px

Cards:
16px

Large cards:
20px

Modals:
20px

Avatar:
50%

13. SHADOWS
Use subtle shadows.
Avoid heavy generic SaaS shadows.
Example philosophy:
card:
0 4px 20px rgba(...)

The interface should mostly use:
spacing
borders
surface contrast
subtle elevation
rather than huge shadows.
14. ANIMATION
Animations are important.
Use Framer Motion where appropriate.
The product should feel alive.
Implement subtle animations for:
page transitions
learning map nodes
current topic pulse
progress bar
mastery percentage changes
answer feedback
unlocking a topic
success state
AI messages
modal appearance
hover states
button interactions
lesson transitions
XP/coin/streak counters when implemented
confetti for major success
Do not over-animate.
The goal is:
polished gamification, not a distracting game.
15. STUDENT EXPERIENCE
Student = GAME.
The student interface should feel like an educational game.
Main navigation:
Home
Roadmap
Practice
Progress
AI Tutor
Shop
Profile

Desktop should use a left sidebar.
Mobile should use bottom navigation.
16. STUDENT DESKTOP LAYOUT
Create a layout inspired by the first reference screenshot.
Approximate structure:
┌───────────────────────────────────────────────────────────────┐
│ ZERTTE      🔥 7      🪙 240      🧠 63%       RU ▼    Avatar │
├──────────────┬────────────────────────────────────────────────┤
│              │                                                │
│  🏠 Home     │        SECTION 1 · UNIT 1                     │
│              │                                                │
│  🗺 Roadmap  │        Introduction to Algebra                │
│              │                                                │
│  🎯 Practice │        63% complete                           │
│              │                                                │
│  📊 Progress │        [ 📖 Guidebook ]                       │
│              │                                                │
│  ✦ AI Tutor │                 KNOWLEDGE TREE                  │
│              │                                                │
│  🛍 Shop     │                       ●                        │
│              │                      / \                       │
│              │                 ●───●   ●                      │
│              │                /                              │
│              │               ●                               │
│              │                                                │
│              │                                                │
└──────────────┴────────────────────────────────────────────────┘

Do not literally copy this ASCII layout.
Use it as a structural requirement.
17. TOP HEADER
The student header should show:
🔥 Streak
🪙 Coins
🧠 Mastery
Language
Avatar

However:
IMPORTANT:
Streak and Coins are currently not fully supported by the existing backend contract.
Therefore:
architect the UI for them now
use a clean temporary/mock state if necessary
isolate them in a gamification service/store
make it easy to replace with real API data later
Do not pretend they are already backend values.
Mastery IS backend-backed and should use real data.
Do not add XP as a primary metric because it is not currently part of the backend contract.
18. STREAK
UI:
🔥 7

or:
🔥 7 day streak

Make it visually prominent.
The component should be isolated so that a future backend gamification endpoint can replace the current placeholder.
19. COINS
UI:
🪙 240

Coins are future-ready.
The Shop will eventually consume this currency.
Do not build a fake complicated economy.
Just build the visual architecture and clean state abstraction.
20. MASTERy
Mastery is real backend data.
Example:
🧠 63%

Use it throughout the product.
Mastery should appear in:
header
subject cards
knowledge tree nodes
topic page
progress page
lesson result
teacher dashboard
teacher heatmap
21. NO HEART/LIVES SYSTEM
Do NOT implement hearts/lives.
Unlike Duolingo:
ZERTTE does NOT use a hearts system.
Do not show:
❤️ 5
22. NO LEADERBOARD
Do not implement leaderboard.
23. NO ACHIEVEMENTS
Do not implement achievements yet.
24. NO DAILY QUESTS
Do not implement Daily Quests.
25. SHOP
Create /shop.
The Shop is not fully available in the backend yet.
Therefore create the frontend architecture now.
Example:
SHOP

🪙 240

Avatars
Themes
Cosmetics
Boosters

Show:
Coming Soon

where backend functionality does not yet exist.
The route and components should already exist so the backend can be connected later.
26. SUBJECTS
Different subjects must have different learning maps.
Example:
Mathematics
    ↓
Mathematics Knowledge Tree

Physics
    ↓
Physics Knowledge Tree

Programming
    ↓
Programming Knowledge Tree

Do not create one universal giant map.
27. LEARNING MAP
This is the most important student page.
Use a Knowledge Tree.
It should visually represent:
Completed
Current
Unlocked
Locked
Bonus
Challenge

Node states:
Completed
green
checkmark
mastery %

Current
purple
strong glow
pulse animation
mastery %

Unlocked
blue/purple
clickable

Locked
gray
lock icon

Bonus
yellow
star

Challenge
red/orange
special icon

28. KNOWLEDGE TREE STRUCTURE
Use actual backend relationships:
parentTopicId
prerequisites
blockedBy
prerequisiteMet

The frontend should not invent dependencies.
Render the actual knowledge structure received from the backend.
Example:
                 FUNCTIONS
                    ✓
                    │
              DERIVATIVES
                    ✓
                    │
               CHAIN RULE
                  31%
                 CURRENT
                 /       \
                /         \
        PRODUCT RULE    QUOTIENT RULE
             🔓              🔒

29. SECTION HEADER
At the top of the map:
SECTION 1 · UNIT 1

Introduction to Algebra

63% complete

[ 📖 Guidebook ]

The progress percentage must be meaningful.
Do not use random fake values when real progress can be calculated from backend data.
30. CURRENT TOPIC CARD
When a user selects the current node:
CHAIN RULE

Mastery
31%

██████░░░░░░░░

Why this topic?

• 3 recent mistakes
• prerequisite completed
• recommended by your learning state

Difficulty:
Medium

[ Start Lesson → ]

Use the actual backend reason when available.
This is one of the strongest product differentiators.
31. LEARN PAGE
Create a subject selection interface.
Example:
Your Subjects

┌─────────────────────────┐
│ Mathematics             │
│                         │
│ Mastery                 │
│ ███████████░░░ 63%      │
│                         │
│ 3 / 8 topics            │
│                         │
│ Continue →              │
└─────────────────────────┘

Use actual subject/mastery data.
32. LESSON SCREEN
When a lesson starts:
CHANGE THE ENTIRE LAYOUT.
Do not keep the dashboard/sidebar visible.
Use an immersive full-screen lesson experience inspired by the second reference screenshot.
Structure:
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  ×        ███████████████░░░░░░░░░░░░       🧠 63%          │
│                                                             │
│                                                             │
│                  QUESTION                                   │
│                                                             │
│              Find the derivative                            │
│                                                             │
│                  f(x) = sin(3x)                             │
│                                                             │
│                                                             │
│              ┌────────────────────┐                         │
│              │                    │                         │
│              │    3cos(3x)        │                         │
│              │                    │                         │
│              └────────────────────┘                         │
│                                                             │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│       💡 Ask AI                       [ CHECK ANSWER ]       │
│                                                             │
└─────────────────────────────────────────────────────────────┘

This should feel focused and immersive.
33. LESSON QUESTION TYPES
The lesson system should support a reusable renderer architecture.
Build:
QuestionRenderer

with support for multiple question types.
Potential types include:
QUIZ
TEXT_INPUT
MATH_EXPRESSION
MATCHING
STEP_BY_STEP
TRUE_FALSE

Use whatever types are actually supported by the backend.
Questions should be able to appear in randomized combinations.
Do not assume every lesson has the same question order.
34. ANSWER FEEDBACK
Correct answer:
✓ Great job!

Mastery

31% → 51.7%

███████████████░░

Next difficulty:
MEDIUM

New topic unlocked!
Product Rule 🔓

[ Continue → ]

Use real backend values:
masteryBefore
masteryAfter
nextTaskDifficulty
prerequisiteUnlocked

35. WRONG ANSWER
Do NOT just show:
Wrong answer.

Use AI-driven feedback.
Example:
Not quite.

✦ AI Tutor

You used the derivative of sin(x),
but missed the inner function 3x.

This looks like a conceptual error.

[ Try Again ]
[ Explain More ]

Use actual mistakeType and backend feedback.
Known mistake categories may include:
CALCULATION_ERROR
CONCEPTUAL_ERROR
READING_ERROR

Render these in a friendly educational way.
Never shame the student.
36. AI TUTOR
Create TWO AI experiences.
A. Full AI Tutor page
Route:
/tutor

It should feel like an intelligent learning assistant.
Not a generic ChatGPT clone.
The AI must know the current learning context.
Example:
✦ AI TUTOR

Hey, Aibek!

What are we working on?

[ Chain Rule ]
[ Derivatives ]
[ Algebra ]

────────────────────────

You:
Why do I multiply by 3?

AI:
Because the inner function is 3x...

┌────────────────────────────┐
│ FORMULA                    │
│                            │
│ (f(g(x)))' = f'(g(x))g'(x)│
└────────────────────────────┘

Ask anything...

37. AI INSIDE LESSON
There must also be an:
💡 Ask AI

button inside lessons.
Opening it should create a contextual AI panel/modal.
The AI should know:
subject
topic
current question
previous answer
mistake
learning context
Do not create an AI assistant that has no context.
38. AI STRUCTURED RESPONSES
The existing API may return structured AI widgets such as:
QUIZ
MATH_EXPRESSION
FORMULA_CARD
STEP_BY_STEP

Build reusable frontend components for these.
For example:
<AIQuizCard />

<FormulaCard />

<MathExpression />

<StepByStepExplanation />

39. AI STREAMING
The backend supports SSE/streaming.
Implement the frontend architecture to support streaming AI responses.
The user should see the AI response appearing progressively rather than waiting for the entire response when the backend supports streaming.
40. DIAGNOSTIC
Create a beautiful immersive diagnostic flow.
The diagnostic should feel like the beginning of the game.
Example:
Let's understand what you already know.

Question 1 / 8

What is the derivative of x²?

○ 2x
○ x
○ x²
○ I don't know

[ Continue ]

After diagnostic:
Your Learning Profile

Mathematics

Functions
████████████ 82%

Equations
██████████░░ 67%

Derivatives
████░░░░░░░░ 31%

Recommended starting point:

Chain Rule

[ Start Learning → ]

Use real diagnostic/knowledge APIs.
41. ONBOARDING
Create a personalized onboarding flow.
At minimum:
Step 1 — Language
What language do you want to learn in?

🇬🇧 English
🇷🇺 Русский
🇰🇿 Қазақша

Step 2 — Grade / level
Step 3 — Subjects
Step 4 — Goals
Step 5 — Diagnostic
The user specifically selected:
English
Russian
Kazakh

The content language should depend on the language selected during onboarding.
42. INTERNATIONALIZATION
Build proper i18n architecture from the beginning.
Supported UI languages:
English
Russian
Kazakh

Do not hardcode UI text throughout components.
Use translation dictionaries.
Example:
/en
/ru
/kk

or an equivalent robust i18n architecture.
Important distinction:
UI language
and
Learning content language
must be architecturally separable.
The user chooses language at onboarding.
Tasks/content should be requested/displayed according to the selected learning language when backend support exists.
Do not fake translated educational content.
43. PROFILE
Create a student profile page.
Include:
Avatar
Name
Level/grade
Current streak
Coins
Overall mastery
Subjects
Learning statistics
Language
Preferences

Use real backend values where available.
Future gamification values should use isolated state abstractions.
44. PROGRESS PAGE
Create a visually strong analytics page.
Show:
Overall Mastery

63%

Subject mastery

Mathematics    63%
Physics        42%
Programming    81%

Topic mastery:
Functions        92%
Equations        81%
Derivatives      31%
Chain Rule       31%

Use:
charts
progress bars
mastery cards
trend indicators
recent activity
Use actual backend knowledge data.
Do not fabricate analytics when real data exists.
45. TEACHER EXPERIENCE
Teacher = PROFESSIONAL DASHBOARD.
Do NOT make teacher interface gamified like the student interface.
Teacher should have:
Dashboard
Classes
Students
Knowledge Map
Assignments
Lessons
AI Planner
Content

Professional, clean, analytical UI.
46. TEACHER DASHBOARD
Main KPIs:
Students
Average Mastery
Students Needing Help

Example:
Good afternoon, Aibek.

10A · Mathematics

┌──────────────┐
│ 24           │
│ Students     │
└──────────────┘

┌──────────────┐
│ 64%          │
│ Avg Mastery  │
└──────────────┘

┌──────────────┐
│ 7            │
│ Need Help    │
└──────────────┘

Use real backend class data.
47. TEACHER WEAK TOPICS
Show:
Weak Topics

Chain Rule
██████░░░░░░ 43%

Word Problems
█████░░░░░░░ 38%

Use actual backend data.
48. TEACHER HEATMAP
The backend has class knowledge/heatmap functionality.
Create:
                 Functions   Derivatives   Chain Rule
Ayan                 🟢          🟢            🟡
Dias                 🟢          🟡            🔴
Aruzhan              🟢          🟢            🟢
Miras                🟡          🔴            🔴

Use semantic colors:
Green:
≥ 70%

Yellow:
40–69.9%

Red:
< 40%

Make the heatmap interactive.
Clicking a student should open their learning profile.
Clicking a topic should show class performance.
49. TEACHER AI ORCHESTRATOR
Create:
AI Lesson Planner

The teacher can ask:
What should I teach tomorrow?
The UI should show:
Recommended Lesson

15 min — Review
20 min — Chain Rule Practice
10 min — Individual Remediation

Why?

43% class mastery
61% errors related to...
8 students below target mastery

The backend may provide:
reasoning
suggestedRecommendationId

Use real API data.
Recommendations should have:
Approve
Edit
Reject

Only approved recommendations should be treated as accepted according to backend semantics.
50. TEACHER CLASS PAGE
Create:
/teacher/classes/[id]

Include:
class overview
students
average mastery
weak topics
strong topics
heatmap
recent activity
AI recommendations
51. TEACHER STUDENTS
Create a student table.
Columns:
Student
Mastery
Trend
Weakest Topic
Last Activity
Status

Status:
Healthy
Needs Attention
At Risk

Use actual backend values where possible.
52. RESPONSIVE DESIGN
Support:
Desktop
Laptop
Tablet
Mobile

Priority:
Desktop + Mobile.
Student mobile navigation:
┌───────────────────────────┐
│                           │
│         CONTENT           │
│                           │
├───────────────────────────┤
│ 🏠     🗺     ✦     ◯    │
│ Home  Map    AI    Profile│
└───────────────────────────┘

Teacher mobile can use a mobile drawer navigation.
53. COMPONENT ARCHITECTURE
Refactor the current frontend into a scalable structure.
Suggested:
app/
├── (auth)/
│   ├── login/
│   └── register/
│
├── (onboarding)/
│   └── onboarding/
│
├── (student)/
│   ├── learn/
│   ├── roadmap/
│   ├── practice/
│   ├── progress/
│   ├── tutor/
│   ├── shop/
│   └── profile/
│
├── (teacher)/
│   ├── dashboard/
│   ├── classes/
│   ├── students/
│   ├── heatmap/
│   ├── lessons/
│   ├── assignments/
│   ├── content/
│   └── ai/
│
└── components/
    ├── ui/
    ├── layout/
    ├── student/
    ├── learning/
    ├── knowledge-tree/
    ├── lesson/
    ├── ai/
    ├── teacher/
    └── gamification/

Adapt this to the existing Next.js App Router structure instead of blindly replacing the current architecture.
54. CORE REUSABLE COMPONENTS
Create reusable components such as:
Button
Card
Badge
ProgressBar
Avatar
Modal
Drawer
Tooltip
Tabs
Dropdown
Toast
Skeleton
EmptyState
ErrorState

Learning:
SubjectCard
TopicNode
KnowledgeTree
Roadmap
TopicDetails
MasteryBar
LessonProgress
QuestionRenderer
AnswerOption
AnswerInput
AnswerFeedback
MistakeFeedback
UnlockAnimation

AI:
AITutor
AIMessage
AIQuizCard
FormulaCard
MathExpression
StepByStepCard
AIContextPanel

Teacher:
MetricCard
StudentTable
Heatmap
TopicPerformance
AIRecommendation
ClassOverview

Gamification:
StreakBadge
CoinBalance
MasteryBadge

55. STATE MANAGEMENT
Separate:
Server state
Use API/server state management.
Client state
Use lightweight state management for:
current lesson
selected question
selected answer
onboarding state
UI state
language
temporary gamification placeholders
Do not put everything into global state.
56. API ARCHITECTURE
Create a clean API abstraction.
Do not make raw fetch() calls everywhere.
Prefer:
services/
    auth.ts
    students.ts
    subjects.ts
    knowledge.ts
    roadmap.ts
    diagnostic.ts
    tasks.ts
    tutor.ts
    teacher.ts

or an architecture appropriate to the existing repository.
All API types should be strongly typed.
Do not use any unnecessarily.
57. IMPORTANT — DO NOT BREAK THE BACKEND CONTRACT
Do not rename existing backend fields.
Do not invent fake response structures.
Do not silently change API semantics.
If the backend says:
masteryAfter

use it.
If the backend says:
mistakeType

use it.
If the backend says:
prerequisiteUnlocked

use it.
58. LOADING STATES
Every important API-driven screen must have polished loading states.
Do not just show:
Loading...

Use skeletons.
Examples:
SubjectCardSkeleton
KnowledgeTreeSkeleton
DashboardSkeleton
TeacherTableSkeleton
AIMessageSkeleton

59. EMPTY STATES
Create meaningful empty states.
Example:
No subjects yet.

Let's find the right learning path for you.

[ Start Diagnostic ]

60. ERROR STATES
Create friendly error states.
Example:
Something went wrong.

We couldn't load your learning path.

[ Try Again ]

Never expose raw API errors to the student.
61. ACCESSIBILITY
The frontend must have:
keyboard navigation
accessible buttons
proper focus states
ARIA labels where needed
sufficient contrast
semantic HTML
accessible forms
Do not sacrifice accessibility for visual effects.
62. PERFORMANCE
Optimize:
images
component rendering
API requests
animations
large knowledge trees
Avoid unnecessary client components.
Use server components where appropriate.
63. SECURITY
Do not store sensitive information insecurely.
Respect the existing auth architecture.
Do not expose secrets in frontend code.
Use environment variables correctly.
64. DEMO-FIRST PRIORITY
The hackathon demo is extremely important.
The ideal student demo flow is:
Login
↓
Onboarding
↓
Diagnostic
↓
Knowledge State
↓
Knowledge Tree
↓
Recommended Current Topic
↓
Start Lesson
↓
Question
↓
Wrong Answer
↓
AI Explanation
↓
Try Again
↓
Correct
↓
Mastery 31% → 51.7%
↓
Topic Unlock Animation
↓
Next Topic

The ideal teacher demo:
Teacher Login
↓
Class Dashboard
↓
Class Mastery
↓
Weak Topic
↓
Knowledge Heatmap
↓
AI Recommendation
↓
Lesson Plan
↓
Approve

These flows should feel extremely polished.
65. VISUAL QUALITY BAR
The result should feel like a real startup product.
Not:
hackathon prototype
admin panel
collection of cards
generic Tailwind template
It should feel like:
a polished AI EdTech startup that could be launched publicly.
Pay special attention to:
spacing
typography
hierarchy
animation
transitions
empty states
loading states
responsive layout
consistent component design
66. WHAT NOT TO DO
Do NOT:
copy Duolingo branding
copy Duolingo logo
copy Duo mascot
use Duolingo green as the main brand
make everything green
use dark mode as the main theme
create generic SaaS dashboard
create a giant sidebar full of random features
add leaderboard
add hearts
add achievements
add daily quests
invent XP backend
invent backend endpoints
fabricate learning data when real API data exists
create fake AI responses when API is available
create fake mastery values
mix teacher and student UX
overuse gradients
overuse glassmorphism
overuse animations
67. BRAND
Product name:
ZERTTE
Use ZERTTE consistently.
Do not call the product:
Future Minds
FutureMind
Zertte AI
Zertte Learning
unless I explicitly request it.
The product brand is:
ZERTTE
68. FINAL EXPECTATION
Build the frontend as if you are the lead frontend engineer of a funded EdTech startup.
The final product should have:
Student
Login
Register
Onboarding
Language selection
Diagnostic
Home
Subject selection
Knowledge Tree
Adaptive Roadmap
Topic details
Lessons
Randomized question types
Answer validation
AI feedback
Mastery updates
Unlock animations
Progress
AI Tutor
Profile
Shop placeholder
Streak UI
Coins UI
Mastery UI
English/Russian/Kazakh UI architecture
Desktop + mobile
Teacher
Login
Teacher Dashboard
Classes
Class overview
Students
Student details
Knowledge performance
Heatmap
Weak topics
Strong topics
AI recommendations
AI lesson planner
Lesson recommendations
Content/assignment areas where supported by backend
Desktop + mobile
69. BEFORE IMPLEMENTATION
If you find anything unclear in:
API behavior
role permissions
routing
data structures
lesson behavior
question types
authentication
language behavior
teacher workflows
gamification
knowledge tree rendering
STOP and ASK ME.
Do not make a major product decision silently.
You can ask multiple questions at once.
If there is a small implementation detail that does not affect product behavior, use your best engineering judgment.
70. MOST IMPORTANT PRODUCT PRINCIPLE
Always ask yourself:
"Does this UI help the student understand what they know, what they don't know, and what they should learn next?"
If yes — prioritize it.
If no — it is probably secondary.
The core ZERTTE experience is:
KNOWLEDGE
    ↓
ADAPTATION
    ↓
LEARNING
    ↓
AI
    ↓
MASTERY

Build the entire frontend around this idea.
Start by inspecting the repository and existing API contract.
Then propose any necessary clarification questions.
After clarification, implement the complete frontend incrementally without breaking the existing backend.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/247f1696-edff-4926-bf0e-033aa03d1781).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
