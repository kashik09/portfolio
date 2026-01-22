#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

echo "=== Import Production Data to Local Docker ==="
echo ""
echo "This will:"
echo "  1. Export data from Supabase (production)"
echo "  2. Import into local Docker Postgres"
echo ""
read -p "Continue? (y/N) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Cancelled."
    exit 0
fi

# Use Supabase connection (from .env)
SUPABASE_URL="postgres://postgres.ultotulngnhtzxqeegcr:UlksIuGDZGWTQzJG@aws-1-us-east-1.pooler.supabase.com:5432/postgres?sslmode=require"
LOCAL_URL="postgresql://postgres:postgres@localhost:5432/myportfolio?schema=public"

echo ""
echo "Step 1: Exporting from Supabase..."
PGPASSWORD="UlksIuGDZGWTQzJG" pg_dump \
  -h "aws-1-us-east-1.pooler.supabase.com" \
  -U "postgres.ultotulngnhtzxqeegcr" \
  -d "postgres" \
  -p 5432 \
  --data-only \
  --inserts \
  --disable-triggers \
  -t projects \
  -t digital_products \
  -t users \
  -t site_settings \
  > /tmp/supabase-export.sql 2>/dev/null || echo "Note: Some tables may not exist, continuing..."

echo "Step 2: Importing to local Docker..."
docker exec -i myportfolio-pg psql -U postgres -d myportfolio < /tmp/supabase-export.sql

echo ""
echo "Step 3: Verifying..."
docker exec myportfolio-pg psql -U postgres -d myportfolio -c "
  SELECT 'projects' as table, COUNT(*) FROM projects
  UNION ALL SELECT 'digital_products', COUNT(*) FROM digital_products
  UNION ALL SELECT 'users', COUNT(*) FROM users
  ORDER BY table;
"

echo ""
echo "✅ Import complete!"
rm /tmp/supabase-export.sql
