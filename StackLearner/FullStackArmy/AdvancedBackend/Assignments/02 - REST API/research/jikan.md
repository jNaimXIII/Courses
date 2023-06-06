# Jikan (MAL)

- Base URL: `https://api.jikan.moe`
- API versions are accessed via `/v{version_number}`.
- Follows OpenAPI Specifications.
- Cache validation done through `ETag`.
- Implements cache through the following headers.
  - `Expires` - Cache expiry date
  - `Last-Modified` - Cache set date
  - `X-Request-Fingerprint` - Unique request fingerprint
- Only allows a specific set of HTTP methods.
- Resources:
  - Anime
    - `/anime/{id}/full`
    ```json
    {
      "data": {
        "mal_id": 0,
        "url": "string",
        "images": {},
        "trailer": {},
        "approved": true,
        "titles": [],
        "title": "string",
        "title_english": "string",
        "title_japanese": "string",
        "title_synonyms": [],
        "type": "TV",
        "source": "string",
        "episodes": 0,
        "status": "Finished Airing",
        "airing": true,
        "aired": {},
        "duration": "string",
        "rating": "G - All Ages",
        "score": 0,
        "scored_by": 0,
        "rank": 0,
        "popularity": 0,
        "members": 0,
        "favorites": 0,
        "synopsis": "string",
        "background": "string",
        "season": "summer",
        "year": 0,
        "broadcast": {},
        "producers": [],
        "licensors": [],
        "studios": [],
        "genres": [],
        "explicit_genres": [],
        "themes": [],
        "demographics": [],
        "relations": [],
        "theme": {},
        "external": [],
        "streaming": []
      }
    }
    ```
  - Characters
- Implements HATEOAS.
