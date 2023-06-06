# API Research

- [Discord](./discord.md)
- [Guild Wars 2](./guild-wars-2.md)
- [Jikan (MAL)](./jikan.md)

## Common Concepts

- Versioning done using `{BASE_URL}/v{version_number}`.
- Consistend response object.
- Authentication done via tokens.
- Authorization key is provided through headers.
- Rate limited.
- Well defined resources and endpoints.
- Cached responses.
- Allow specified HTTP methods only.

## Unique Concepts

- Jikan
  - HATEOAS

## Bad Practices

- Guild Wars 2
  - Accepts authentication token through query parameters.
- Jikan
  - Used singular nouns for resource endpoints.
    - `/anime` instead of `/animes`.
