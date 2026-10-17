#!/usr/bin/env bash
# Run from the extracted Austurusa Rev-I FIPE folder. Git-connected Vercel deploys pushes to main.
set -euo pipefail
cd "$(dirname "$0")"
REPO_URL='https://github.com/jlsviper/austurusa.com.git'
if [[ -e .git ]]; then
  echo 'This extracted directory already contains a .git repository. Review it before running publish.sh again.' >&2
  exit 1
fi
for cmd in git curl; do command -v "$cmd" >/dev/null || { echo "Required command not found: $cmd" >&2; exit 1; }; done

echo 'Attaching this extracted directory to the existing GitHub history...'
git init -b main
git remote add origin "$REPO_URL"
git fetch origin main
# Updates Git HEAD and index without changing any extracted site file.
# Old site files that are absent from Rev-I become tracked deletions.
git reset --mixed origin/main

echo 'Restoring the ORIGINAL Jack Shaquer portrait from the current Git revision...'
if ! git show origin/main:assets/jack-shaquer.jpg > assets/jack-shaquer.jpg 2>/dev/null; then
  echo 'Portrait not in the fetched path; trying the current public photo URL...'
  curl --fail --location --silent --show-error 'https://www.austurusa.com/assets/jack-shaquer.jpg' --output assets/jack-shaquer.jpg
fi
if [[ ! -s assets/jack-shaquer.jpg ]]; then
  echo 'The original founder portrait could not be recovered. Aborting; nothing was pushed.' >&2
  exit 1
fi

# A tiny sanity check against accidentally publishing HTML instead of the JPEG.
if command -v file >/dev/null; then
  if ! file -b assets/jack-shaquer.jpg | grep -Eqi 'JPEG|image'; then
    echo 'The restored portrait is not recognized as an image. Aborting; nothing was pushed.' >&2
    exit 1
  fi
fi

git add -A
printf '\nChanges to publish:\n'
git diff --cached --stat
printf '\nPublishing FIPE-first Rev I to GitHub main (Vercel production branch)...\n'
git commit -m 'Rev I: remove signal strip and add light/dark mode'
git push -u origin main
printf '\nGitHub push complete. Check the connected Vercel project for deployment status.\n'
