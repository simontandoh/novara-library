#!/usr/bin/env bash
set -e

read -p "Client slug (e.g. redfield-fc): " SLUG
read -p "Vertical (trade|beauty|luxury|restaurant|consultant|editorial): " VERTICAL

TARGET="apps/${SLUG}"

if [ -d "$TARGET" ]; then
  echo "Error: $TARGET already exists."
  exit 1
fi

cp -R apps/client-template "$TARGET"
rm -rf "$TARGET/node_modules" "$TARGET/.next"

# Stamp the brief
cat > "$TARGET/brief.md" << BRIEF
# ${SLUG}

vertical: ${VERTICAL}
status: drafting
notes: |
  Add client positioning, brand notes, sections, and references here.
BRIEF

echo "Created $TARGET. Run: cd $TARGET && pnpm install && pnpm dev"
