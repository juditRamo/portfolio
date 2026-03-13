# Adding Projects

## How to add a new project

1. Add a project entry to both dictionary files:
   - `src/i18n/dictionaries/en.json` (English)
   - `src/i18n/dictionaries/es.json` (Spanish)

2. Add the entry inside the `projects.items` array.

## Project entry fields

| Field | Required | Description |
|---|---|---|
| `title` | Yes | Project name |
| `description` | Yes | Short description (1-2 sentences) |
| `tech` | Yes | Array of technology names shown as badges |
| `liveUrl` | No | URL to the live/deployed project |
| `repoUrl` | No | URL to the source code repository |

## Example entry

```json
{
  "title": "My Project",
  "description": "A brief description of what this project does.",
  "tech": ["React", "TypeScript", "Node.js"],
  "liveUrl": "https://my-project.com",
  "repoUrl": "https://github.com/user/my-project"
}
```
