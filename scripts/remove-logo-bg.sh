#!/usr/bin/env bash

# Remove near-black background from public/logo.png and write public/logo-transparent.png
# Requires ImageMagick (magick). On macOS: brew install imagemagick

SRC="public/logo.png"
OUT="public/logo-transparent.png"

if ! command -v magick &> /dev/null
then
  echo "ImageMagick (magick) not found. Please install it (e.g. 'brew install imagemagick') and re-run this script."
  exit 1
fi

if [ ! -f "$SRC" ]; then
  echo "$SRC not found. Place your logo at $SRC and re-run."
  exit 2
fi

# Try removing pure/near black background while preserving edge anti-aliasing.
# Adjust -fuzz value if edges look thin or parts of the logo get removed.

magick "$SRC" -alpha set -fuzz 12% -transparent "#000000" \
  -channel A -blur 0x0.5 -level 0,85% +channel "$OUT"

if [ $? -eq 0 ]; then
  echo "Saved $OUT"
else
  echo "ImageMagick command failed"
  exit 3
fi
