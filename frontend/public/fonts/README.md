# Font Files Directory

Place your Tan Pardiso font files in this directory:

- `TanPardiso.woff2` (preferred format)
- `TanPardiso.woff` (fallback)
- `TanPardiso.ttf` (fallback)

## Note

Until the font files are added, the browser will show 404 errors in the console. This is expected and won't affect functionality - the system will automatically fallback to Playfair Display for the "Shyara" brand text.

The font is configured with `font-display: optional` to prevent blocking page rendering if the font fails to load.

