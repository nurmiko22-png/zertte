/**
 * Types mirror docs/api-contract.md (v2) exactly.
 * Field names must never diverge from the backend contract.
 */

export type Role = "STUDENT" | "TEACHER" | "ADMIN";
export type Difficulty = "easy" | "medium" | "hard";
export type Trend = "improving" | "stable" | "declining";
export type MistakeType = "CALCULATION_ERROR" | "CONCEPTUAL_ERROR" | "READING_ERROR";
export type HeatStatus = "GREEN" | "YELLOW" | "RED";
export type SessionKind = "STUDENT_CHAT" | "DIAGNOSTIC" | "FEEDBACK" | "ORCHESTRATOR";
export type UiLanguage = "ru" | "en" | "kk";

/* ---------------- Auth ---------------- */

export interface AuthTokens {
  accessToken: string;
  refreshToken?: string;
}

export interface StudentRef {
  id: string;
  grade: number;
  classId: string | null;
  goals?: Goal[];
  preferences?: StudentPreferences | null;
}

export interface TeacherRef {
  id: string;
}

export interface MeResponse {
  id: string;
  email: string;
  name: string;
  role: Role;
  student?: StudentRef;
  teacher?: TeacherRef;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  role: Extract<Role, "STUDENT" | "TEACHER">;
  grade?: number;
  phone?: string;
}

/* ---------------- Students ---------------- */

export interface Goal {
  subject?: string;
  target: string;
  deadline?: string;
  priority?: number;
}

export interface StudentPreferences {
  /** UI + content language chosen at onboarding. */
  language?: UiLanguage;
  explanationStyle?: string;
  weakTopics?: string[];
  /** Learning content language, kept separable from UI language. */
  contentLanguage?: UiLanguage;
  subjects?: string[];
}

export interface StudentProfile {
  id: string;
  userId: string;
  grade: number;
  classId: string | null;
  goals: Goal[];
  preferences: StudentPreferences | null;
  createdAt: string;
}

export interface SubjectSummary {
  id: string;
  name: string;
  avgMastery: number;
  topicCount: number;
  topicsCompleted: number;
}

export interface KnowledgeTopic {
  topicId: string;
  topicName: string;
  mastery: number;
  attempts: number;
  correctAttempts: number;
  trend: Trend;
  prerequisiteMet: boolean;
  lastActivity: string | null;
}

export interface RoadmapCurrent {
  topicId: string;
  topicName: string;
  reason: string;
}

export interface RoadmapNext {
  topicId: string;
  topicName: string;
  prerequisiteMet: boolean;
  blockedBy?: string[];
}

export interface RoadmapGoal {
  target: string;
  deadline?: string;
  progress: number;
}

export interface Roadmap {
  completed: string[];
  current: RoadmapCurrent | null;
  next: RoadmapNext[];
  goals: RoadmapGoal[];
}

/* ---------------- Topics & tasks ---------------- */

export interface Topic {
  id: string;
  name: string;
  subjectId: string;
  parentTopicId: string | null;
  prerequisites: string[];
}

export interface Task {
  id: string;
  topicId: string;
  difficulty: Difficulty;
  content: string;
  source?: string;
}

/* ---------------- Attempts ---------------- */

export interface UpdatedMastery {
  topicId: string;
  masteryBefore: number;
  masteryAfter: number;
  attempts: number;
  correctAttempts: number;
}

export interface AttemptResult {
  correct: boolean;
  feedback: string;
  mistakeType: MistakeType | null;
  updatedMastery: UpdatedMastery;
  nextTaskDifficulty: Difficulty;
  /** Topic ids or names unlocked by this attempt. */
  prerequisiteUnlocked: string[];
}

/* ---------------- Diagnostic ---------------- */

export interface DiagnosticAnswer {
  topicId: string;
  answer: string;
  correct: boolean;
  attemptNumber: number;
}

export interface DiagnosticResult {
  knowledgeState: Array<{
    topicId: string;
    topicName: string;
    mastery: number;
    prerequisiteMet: boolean;
  }>;
  detectedGoals: Goal[];
  recommendedStartTopic: string;
}

/* ---------------- AI sessions ---------------- */

export type AiScenario = "chat" | "diagnostic" | "feedback" | "orchestrator/chat";

export interface AiSession {
  sessionId: string;
  kind: SessionKind;
  createdAt: string;
}

export type AiWidgetType =
  | "QUIZ"
  | "MATH_EXPRESSION"
  | "FORMULA_CARD"
  | "STEP_BY_STEP"
  | "CONFIRM";

export interface AiWidget {
  type: AiWidgetType;
  payload: Record<string, unknown>;
}

export interface AiMessage {
  id: string;
  role: "user" | "assistant";
  text: string;
  widgets: AiWidget[];
  streaming?: boolean;
}

/* ---------------- Teacher ---------------- */

export interface ClassSummary {
  id: string;
  name: string;
  grade: number;
  studentCount: number;
  code: string;
}

export interface ClassOverview {
  classMastery: number;
  strongTopics: Array<{ topicId: string; topicName: string; mastery: number }>;
  weakTopics: Array<{ topicId: string; topicName: string; mastery: number }>;
  studentsNeedingRemediation: number;
}

export interface HeatmapResponse {
  topics: Array<{ id: string; name: string }>;
  students: Array<{
    studentId: string;
    studentName: string;
    topics: Array<{ topicId: string; mastery: number; status: HeatStatus }>;
  }>;
}

export interface ClassStudent {
  id: string;
  name: string;
  mastery: number;
  trend: Trend;
  lastActive: string | null;
}

export interface TeacherStudentProfile {
  id: string;
  name: string;
  overallMastery: number;
  strongTopics: string[];
  weakTopics: string[];
  recentMistakes: Array<{ topicId: string; type: MistakeType; count: number }>;
}

export interface OrchestratorAnswer {
  answer: string;
  reasoning: string[];
  suggestedRecommendationId: string | null;
}

export interface Recommendation {
  id: string;
  type: "LESSON_PLAN" | "REMEDIAL_TASK" | "STUDENT_ALERT";
  recommendation: Record<string, unknown>;
  reasoning: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}
