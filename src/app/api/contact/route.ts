import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(100),
  phone: z.string().min(10).max(30),
  email: z.string().email().max(120),
  service: z.string().min(1).max(200),
  message: z.string().min(10).max(5000),
});


// Simple in-memory log of submissions (resets on server restart).
// For production, swap for email/CRM integration or a database write.
type Submission = {
  id: string;
  receivedAt: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

const submissions: Submission[] = [];
const MAX_STORE = 200;

function logSubmission(data: z.infer<typeof contactSchema>) {
  const entry: Submission = {
    id: `sub_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    receivedAt: new Date().toISOString(),
    ...data,
  };
  submissions.unshift(entry);
  if (submissions.length > MAX_STORE) submissions.length = MAX_STORE;
  console.log("[contact] new submission", entry.id, entry.email);
  return entry;
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  try {
    const entry = logSubmission(parsed.data);
    return NextResponse.json(
      {
        ok: true,
        id: entry.id,
        message: "Request received. We'll be in touch within one business day.",
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[contact] failed to process submission", err);
    return NextResponse.json(
      { ok: false, error: "Server error" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    ok: true,
    service: "Edgeway Security contact API",
    count: submissions.length,
  });
}
