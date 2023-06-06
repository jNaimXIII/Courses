# Guild Wars 2

- The base URL for Guild Wars 2 API is `https://api.guildwars2.com`.
- There are 3 major versions of GW2 API which can be accessed as
  `/v{version_number}`.
- It uses API keys as authentication mechanism.
  - Request Header - `Authorization: Bearer [api key]`
  - Query Parameter - `?access_token=[api key]`
- Resources:
  - Guilds
    - `/guild/:id`
    ```json
    {
      "level": 34,
      "motd": "Our unique message of the day",
      "influence": 52800,
      "aetherium": 15000,
      "resonance": 1121,
      "favor": 680,
      "id": "116E0C0E-0035-44A9-BB22-4AE3E23127E5",
      "name": "Edit Conflict",
      "tag": "wiki",
      "emblem": {
        "background": {
          "id": 8,
          "colors": [64]
        },
        "foreground": {
          "id": 18,
          "colors": [584, 146]
        },
        "flags": ["FlipBackgroundHorizontal"]
      }
    }
    ```
    - `/colors/:id`
    ```json
    {
      "id": 10,
      "name": "Sky",
      "base_rgb": [128, 26, 26],
      "cloth": {
        "brightness": 22,
        "contrast": 1.25,
        "hue": 196,
        "saturation": 0.742188,
        "lightness": 1.32813,
        "rgb": [54, 130, 160]
      },
      "leather": {
        "brightness": 22,
        "contrast": 1.25,
        "hue": 196,
        "saturation": 0.664063,
        "lightness": 1.32813,
        "rgb": [61, 129, 156]
      },
      "metal": {
        "brightness": 22,
        "contrast": 1.28906,
        "hue": 196,
        "saturation": 0.546875,
        "lightness": 1.32813,
        "rgb": [65, 123, 146]
      },
      "fur": {
        "brightness": 22,
        "contrast": 1.25,
        "hue": 196,
        "saturation": 0.742188,
        "lightness": 1.32813,
        "rgb": [54, 130, 160]
      },
      "item": 20370,
      "categories": ["Blue", "Vibrant", "Rare"]
    }
    ```
