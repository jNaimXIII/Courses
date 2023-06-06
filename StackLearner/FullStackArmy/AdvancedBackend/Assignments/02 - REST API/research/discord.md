# Discord API

- The base URL for Discord's API is `https://discord.com/api`.
- It has multiple versions ranging from `v3` to `v10`. The version number is
  added as `/v{version_number}` after the base URL.
- It has a consistent error message format for API error responses.
  ```json
  {
    "code": 50035,
    "errors": {
      "access_token": {
        "_errors": [
          {
            "code": "BASE_TYPE_REQUIRED",
            "message": "This field is required"
          }
        ]
      }
    },
    "message": "Invalid Form Body"
  }
  ```
- It has two types of authentication mechanism:
  - Bot Token
  - OAuth2 Token
- Authorization is done through the `Authorization` header.
  - `Authorization: Bot MTk4NjIyNDgzNDcxOTI1MjQ4.Cl2FMQ.ZnCjm1XVW7vRze4b7Cq4se7kKWs`
  - `Authorization: Bearer CZhtkLDpNYXgPH9Ml6shqh2OwykChw`
- All forms of communication with it is encrypted using TLS 1.2.
- It uses Twitter's `snowflake` format for unique IDs which are 64-bit unsigned
  integers.
- The HTTP API must have a `User-Agent` header.
  - `User-Agent: DiscordBot ($url, $versionNumber)`
- It is rate limited in accordance to RFC 6585.
  - https://datatracker.ietf.org/doc/html/rfc6585#section-4
- Booleans in query strings are represented as:
  - `True`, `true`, `1` for true.
  - `False`, `false`, `0` for false.
- It has the following resources:
  - Application
  - Application Role Connection Metadata
    - `/applications/{application.id}/role-connections/metadata`
  - Audit Log
    - `/guilds/{guild.id}/audit-logs`
  - Auto Moderation
    - `/guilds/{guild.id}/auto-moderation/rules`
    - `/guilds/{guild.id}/auto-moderation/rules/{auto_moderation_rule.id}`
  - Channel
    - `/channels/{channel.id}`
    ```json
    {
      "id": "41771983423143937",
      "guild_id": "41771983423143937",
      "name": "general",
      "type": 0,
      "position": 6,
      "permission_overwrites": [],
      "rate_limit_per_user": 2,
      "nsfw": true,
      "topic": "24/7 chat about how to gank Mike #2",
      "last_message_id": "155117677105512449",
      "parent_id": "399942396007890945",
      "default_auto_archive_duration": 60
    }
    ```
    - `/channels/{channel.id}/messages`
    - `/channels/{channel.id}/messages/{message.id}`
    - `/channels/{channel.id}/messages/{message.id}/crosspost`
    - `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/@me`
    - `/channels/{channel.id}/messages/{message.id}/reactions/{emoji}/{user.id}`
    - `/channels/{channel.id}/messages/bulk-delete`
    - `/channels/{channel.id}/permissions/{overwrite.id}`
    - `/channels/{channel.id}/invites`
    - `/channels/{channel.id}/typing`
    - `/channels/{channel.id}/pins`
    - `/channels/{channel.id}/pins/{message.id}`
  - Emoji
  - Guild
    - `/guilds`
    - `/guilds/{guild.id}`
    ```json
    {
      "id": "2909267986263572999",
      "name": "Mason's Test Server",
      "icon": "389030ec9db118cb5b85a732333b7c98",
      "description": null,
      "splash": "75610b05a0dd09ec2c3c7df9f6975ea0",
      "discovery_splash": null,
      "approximate_member_count": 2,
      "approximate_presence_count": 2,
      "features": [
        "INVITE_SPLASH",
        "VANITY_URL",
        "COMMERCE",
        "BANNER",
        "NEWS",
        "VERIFIED",
        "VIP_REGIONS"
      ],
      "emojis": [
        {
          "name": "ultrafastparrot",
          "roles": [],
          "id": "393564762228785161",
          "require_colons": true,
          "managed": false,
          "animated": true,
          "available": true
        }
      ],
      "banner": "5c3cb8d1bc159937fffe7e641ec96ca7",
      "owner_id": "53908232506183680",
      "application_id": null,
      "region": null,
      "afk_channel_id": null,
      "afk_timeout": 300,
      "system_channel_id": null,
      "widget_enabled": true,
      "widget_channel_id": "639513352485470208",
      "verification_level": 0,
      "roles": [
        {
          "id": "2909267986263572999",
          "name": "@everyone",
          "permissions": "49794752",
          "position": 0,
          "color": 0,
          "hoist": false,
          "managed": false,
          "mentionable": false
        }
      ],
      "default_message_notifications": 1,
      "mfa_level": 0,
      "explicit_content_filter": 0,
      "max_presences": null,
      "max_members": 250000,
      "max_video_channel_users": 25,
      "vanity_url_code": "no",
      "premium_tier": 0,
      "premium_subscription_count": 0,
      "system_channel_flags": 0,
      "preferred_locale": "en-US",
      "rules_channel_id": null,
      "public_updates_channel_id": null,
      "safety_alerts_channel_id": null
    }
    ```
    - `/guilds/{guild.id}/preview`
    - `/guilds/{guild.id}/channels`
    - `/guilds/{guild.id}/threads/active`
    - `/guilds/{guild.id}/members`
    - `/guilds/{guild.id}/members/{user.id}`
    - `/guilds/{guild.id}/members/search`
    - `/guilds/{guild.id}/bans`
    - `/guilds/{guild.id}/bans/{user.id}`
  - Guild Scheduled Event
  - Guild Template
  - Invite
  - Stage Instance
  - Sticker
  - User
  - Voice
  - Webhook
