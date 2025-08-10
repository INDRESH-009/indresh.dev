import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "Invalid secret" }, { status: 401 });
  }

  const body = await req.json().catch(() => ({}));
  const slug = body?.slug?.current || body?.slug; // allow both shapes

  // Revalidate index
  revalidatePath("/blogs");
  if (slug) revalidatePath(`/blogs/${slug}`);

  return NextResponse.json({ revalidated: true, slug: slug ?? null });
}
