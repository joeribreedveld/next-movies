import { Pool } from "@neondatabase/serverless";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> },
) {
  const userId = (await params).userId;

  const { rows } = await pool.query(
    'SELECT * FROM bookmarks WHERE "userId" = $1',
    [userId],
  );

  return Response.json(rows, { status: 200 });
}
