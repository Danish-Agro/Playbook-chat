# Knowledge Base Folder

Place source documents for the chat assistant here.

## Suggested structure
- `knowledge/documents/` for raw source files (PDF, DOCX, TXT, MD)
- `knowledge/processed/` for extracted/chunked files (optional)
- `knowledge/index/` for vector index artifacts (optional)

## Important
- Do not expose this folder directly to frontend clients.
- Use a backend ingestion pipeline to read these files and build retrieval context.
- Keep sensitive/internal documents governed by your data policy.
